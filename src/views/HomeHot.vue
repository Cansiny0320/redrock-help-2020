<template>
  <div>
    <HomeHotTag />
    <div class="home-hot-question">
      <VQuestion
        :questionData="questionList"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { FETCH_QUESTION_HOT } from '@/store/type/actions'
import HomeHotTag from '@/components/HomeHotTag'

export default {
  name: 'homeHot',
  components: {
    HomeHotTag,
  },
  mounted () {
    this.$store.dispatch(FETCH_QUESTION_HOT)
  },
  computed: {
    ...mapGetters(['questionList']),
  },
}
</script>

<style lang="less" scoped>
.home-hot-question {
  margin-top: 240px;
}
</style>

