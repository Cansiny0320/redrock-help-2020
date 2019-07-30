<template>
  <div>
    <HomeHotTag />
    <div class="home-hot-question">
      <VQuestion
        :isLoading="isLoadingQuestionHot"
        :questionData="questionHot"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { FETCH_QUESTION_HOT } from '@/store/type/actions'
import VQuestion from "@/components/VQuestion"
import HomeHotTag from '@/components/HomeHotTag'

export default {
  name: 'homeHot',
  components: {
    VQuestion,
    HomeHotTag,
  },
  watch: {
    $route (to) {
      this.$store.dispatch(FETCH_QUESTION_HOT, to.query.tagId)
    }
  },
  mounted () {
    this.$store.dispatch(FETCH_QUESTION_HOT, this.$route.query.tagId)
  },
  computed: {
    ...mapGetters(['isLoadingQuestionHot', 'questionHot']),
  },
}
</script>

<style lang="less" scoped>
.home-hot-question {
  margin-top: 240px;
}
</style>

