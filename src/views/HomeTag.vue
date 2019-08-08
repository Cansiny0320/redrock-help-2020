<template>
  <div class="home-tag">
    <VHeader :titleStr="tagName"/>
    <div class="question">
      <VQuestion
        :isLoading="isLoading"
        :questionData="questionList"
      />
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
    ...mapGetters(['tagHot', 'isLoading', 'questionList']),
    tagName() {
      let tagName = ''
      this.tagHot.forEach(element => {
        if(element.id === Number(this.$route.query.id)) {
          tagName = element.name
        }
      });
      return `${tagName} 分类下的问题`
    }
  },
  mounted () {
    this.$store.dispatch(FETCH_QUESTION_BY_TAG, this.$route.query.id)
  },
  methods: {
    handelFecthMore() {
      this.$store.dispatch(FETCH_NEXT_TAG_QUESTION, this.$route.query.id)
    }
  }
}
</script>

<style lang="less" scoped>
.question {
  padding-top: 20px;
}
</style>