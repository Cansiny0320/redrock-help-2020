<template>
  <div class="home-tag">
    <header class="header">
      <VBack :isShowBack="true" />
      <div class="title">{{ tagName }} 分类下的问题</div>
    </header>
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

import VBack from '@/components/VBack'
import { FETCH_QUESTION_BY_TAG } from '@/store/type/actions'

import VQuestion from "@/components/VQuestion"
import HomeEditButton from '@/components/HomeEditButton'

export default {
  name: 'homeTag',
  components: {
    VBack,
    VQuestion,
    HomeEditButton,
  },
  watch: {
    $route (to) {
      this.$store.dispatch(FETCH_QUESTION_BY_TAG, to.query.id)
    }
  },
  computed: {
    ...mapGetters(['tagHot', 'isLoading', 'questionList']),
    tagName() {
      let tagName = ''
      this.tagHot.forEach(element => {
        if(element.id === this.$route.query.id) {
          tagName = element.name
        }
      });
      return tagName
    }
  },
  mounted () {
    this.$store.dispatch(FETCH_QUESTION_BY_TAG, this.$route.query.id)
  }
}
</script>

<style lang="less" scoped>
.header {
  margin: 30px;
  display: flex;
  align-items: center;
}
</style>