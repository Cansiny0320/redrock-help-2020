<template>
  <div class="search">
    <SearchBox />
    <SearchHot v-if="!q" />
    <div
      v-else
      class="search-qustion-list"
    >
      <div class="title">
        相关问题
      </div>
      <VQuestion
        :isLoading="isLoading"
        :questionData="questionList"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import SearchBox from '@/components/SearchBox'
import SearchHot from '@/components/SearchHot'
import { FETCH_QUESTION_BY_SEARCH } from '@/store/type/actions'

export default {
  name: 'search',
  data () {
    return {
      q: null
    }
  },
  components: {
    SearchBox,
    SearchHot,
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.q = vm.$route.query.q
      if (from.name !== 'question') {
        if (vm.q) {
          vm.$store.dispatch(FETCH_QUESTION_BY_SEARCH, vm.q)
        }
      }
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.q = to.query.q
    if (this.q) {
      this.$store.dispatch(FETCH_QUESTION_BY_SEARCH, this.q)
    }
    next()
  },
  computed: {
    ...mapGetters(['isLoading', 'questionList'])
  }
}
</script>

<style lang="less" scoped>
.search-qustion-list {
  .title {
    margin: 30px 0 30px 28px;
    font-size: 28px;
    color: @fontColor;
  }
}
</style>


