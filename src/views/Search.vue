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

import VQuestion from "@/components/VQuestion"

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
    VQuestion,
  },
  watch: {
    $route (to) {
      this.q = to.query.q
      if (this.q) {
        this.$store.dispatch(FETCH_QUESTION_BY_SEARCH, this.q)
      }
    }
  },
  mounted () {
    this.q = this.$route.query.q
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


