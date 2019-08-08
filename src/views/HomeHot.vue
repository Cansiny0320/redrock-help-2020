<template>
  <div>
    <HomeHotTag />
    <div class="home-hot-question">
      <VQuestion :questionData="questionList" />
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
    ...mapGetters(['questionList']),
  },
  mounted () {
    this.$store.dispatch(FETCH_QUESTION_HOT)
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
  margin-top: 240px;
}
</style>

