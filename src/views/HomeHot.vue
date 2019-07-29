<template>
  <div>
    <VQuestion :isLoading="isLoadingQuestionHot" :questionData="questionHot"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { FETCH_QUESTION_HOT } from '@/store/type/actions'
import VQuestion from "@/components/VQuestion"

export default {
  name: 'homeHot',
  components: {
    VQuestion
  },
  mounted () {
    this.$store.dispatch(FETCH_QUESTION_HOT)
  },
  computed: {
    ...mapGetters(['isLoadingQuestionHot', 'questionHot']),
  },
}
</script>

<style lang="less" scoped>
</style>

