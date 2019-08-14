<template>
  <div class="home-tag">
    <VHeader :titleStr="tagName" />
    <div class="question">
      <VLoading v-if="isLoading" />
      <VQuestion :questionData="questionList" />
      <div
        class="no-more"
        v-if="questionListNoMore"
      >没有更多了</div>
    </div>
    <HomeEditButton />
  </div>
</template>

<script>
import { mapGetters } from "vuex"

import { FETCH_QUESTION_BY_TAG, FETCH_NEXT_TAG_QUESTION } from '@/store/type/actions'

import HomeEditButton from '@/components/HomeEditButton'

import fetchMore from '@/mixin/fectchMore'

export default {
  name: 'homeTag',
  mixins: [fetchMore],
  components: {
    HomeEditButton,
  },
  computed: {
    ...mapGetters(['tagHot', 'isLoading', 'questionList', 'questionListNoMore']),
    tagName () {
      let tagName = ''
      this.tagHot.forEach(element => {
        if (element.id === Number(this.$route.query.id)) {
          tagName = element.name
        }
      });
      return `${tagName} 分类下的问题`
    }
  },
  beforeRouteEnter (_, from, next) {
    next(vm => {
      if (from.name !== 'question') {
        vm.$store.dispatch(FETCH_QUESTION_BY_TAG, vm.$route.query.id)
      }
    })
  },
  methods: {
    handelFecthMore () {
      this.$store.dispatch(FETCH_NEXT_TAG_QUESTION, this.$route.query.id)
    }
  }
}
</script>

<style lang="less" scoped>
.question {
  padding-top: 20px;
}
.no-more {
  text-align: center;
  padding: 0 30px 30px 30px;
}
</style>