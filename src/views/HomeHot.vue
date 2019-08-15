<template>
  <div>
    <HomeHotTag />
    <div class="home-hot-question">
      <VLoading v-if="isLoading" />
      <VQuestionForHome
        v-else
        :questionData="questionList"
      />
      <VLoading v-if="isLoadingMore"/>
      <div
        class="no-more"
        v-if="questionListNoMore"
      >没有更多了</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { FETCH_QUESTION_HOT, FETCH_NEXT_HOT_QUESTION } from '@/store/type/actions'
import HomeHotTag from '@/components/HomeHotTag'

import fecthMore from '@/mixin/fectchMore'

export default {
  name: 'homeHot',
  mixins: [fecthMore],
  components: {
    HomeHotTag,
  },
  computed: {
    ...mapGetters(['questionList', 'questionListNoMore', 'isLoading', 'isLoadingMore']),
  },
  beforeRouteEnter (_, from, next) {
    next(vm => {
      if (from.name !== 'question') {
        vm.$store.dispatch(FETCH_QUESTION_HOT)
      }
    })
  },
  methods: {
    handelFecthMore () {
      this.$store.dispatch(FETCH_NEXT_HOT_QUESTION)
    }
  }
}
</script>

<style lang="less" scoped>
.home-hot-question {
  margin-top: 265px;
}
.no-more {
  text-align: center;
  padding: 0 30px 30px 30px;
}
</style>

