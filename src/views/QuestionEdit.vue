<template>
  <div class="no-footer">
    <header class="header">
      <VBack />
      <div @click="handelQuestionPublished">
        <vPublishButton />
      </div>
    </header>
    <EditBox />
    <!-- <EditImage /> -->
    <VPopup :massage="progressMassage" v-if="editProgress" />
    <VPopup :massage="tagTipsMassage" v-if="isShowTagTips" />
    <VPopup :massage="wordsMassage" v-if="isShowWordsTips" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import EditBox from '@/components/EditBox'
import EditImage from '@/components/EditImage'
import { FETCH_PUBLISH_QUESTION, EDIT_LEAVE } from '../store/type/actions';
import { END_PORGRESSING } from '../store/type/mutations';

export default {
    name: 'questionEdit',
    components: {
        EditBox,
        EditImage
    },
    data() {
        return {
            progressMassage: '发布中，请稍后...',
            tagTipsMassage: '至少添加一个标签哦~',
            wordsMassage: '你的输入必须大于 4 个字符',
            isShowTagTips: false,
            tagTipsTimer: null,
            subscriber: null,
            isShowWordsTips: false,
            timer: null,
        }
    },
    computed: {
        ...mapGetters(['editProgress', 'editTags', 'editWord']),
    },
    beforeRouteLeave(_, __, next) {
        this.$store.dispatch(EDIT_LEAVE)
        next()
    },
    methods: {
        handelQuestionPublished() {
            if (this.editTags.length === 0) {
                this.isShowTagTips = true
                clearTimeout(this.tagTipsTimer)
                this.tagTipsTimer = setTimeout(() => {
                    this.isShowTagTips = false
                }, 1500)
            } else if (this.editWord.length < 4) {
                this.isShowWordsTips = true
                clearTimeout(this.timer)
                this.timer = setTimeout(() => {
                    this.isShowWordsTips = false
                }, 1500)
            } else {
                this.$store.dispatch(FETCH_PUBLISH_QUESTION)
                // 订阅完成发布的事件
                this.subscriber = this.$store.subscribe(async (mutation, state) => {
                    if (mutation.type === END_PORGRESSING) {
                        // 删除这个订阅
                        await this.subscriber()
                        this.$router.push('/new')
                    }
                })
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/nofooter.less';

.header {
  margin: 30px 24px;
  display: flex;
  justify-content: space-between;
}
</style>

