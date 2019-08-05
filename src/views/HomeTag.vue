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

import { FETCH_QUESTION_BY_TAG } from '@/store/type/actions'

import HomeEditButton from '@/components/HomeEditButton'

export default {
  name: 'homeTag',
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
  created () {
    this.$store.dispatch(FETCH_QUESTION_BY_TAG, this.$route.query.id)
  }
}
</script>

<style lang="less" scoped>
.question {
  padding-top: 20px;
}
</style>