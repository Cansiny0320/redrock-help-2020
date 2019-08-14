<template>
  <div>
    <header class="header">
      <VBack />
      <div @click="handelQuestionPublished">
        <vPublishButton />
      </div>
    </header>
    <EditBox />
    <EditImage />
    <VPopup
      :massage="progressMassage"
      v-if="editProgress"
    />
    <VPopup
      :massage="tagTipsMassage"
      v-if="isShowTagTips"
    />
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
  data () {
    return {
      progressMassage: '发布中，请稍后...',
      tagTipsMassage: '你最少需要选择一个标签',
      isShowTagTips: false,
      tagTipsTimer: null,
      subscriber: null,
    }
  },
  computed: {
    ...mapGetters(['editProgress', 'editTags']),
  },
  beforeRouteLeave (_, __, next) {
    this.$store.dispatch(EDIT_LEAVE)
    next()
  },
  methods: {
    handelQuestionPublished () {
      if (this.editTags.length === 0) {
        this.isShowTagTips = true
        clearTimeout(this.tagTipsTimer)
        this.tagTipsTimer = setTimeout(() => {
          this.isShowTagTips = false
        }, 1500)
      } else {
        this.$store.dispatch(FETCH_PUBLISH_QUESTION)
        // 订阅完成发布的事件
        this.subscriber = this.$store.subscribe(async (mutation, state) => {
          if (mutation.type === END_PORGRESSING) {
            // 删除这个订阅
            await this.subscriber()
            this.$router.go(-1)
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  margin: 30px;
  display: flex;
  justify-content: space-between;
}
</style>

