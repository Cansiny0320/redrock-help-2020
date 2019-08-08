<template>
  <div class="home-new">
    <div class="question">
      <VQuestion
        :isLoading="isLoading"
        :questionData="questionList"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_QUESTION_NEW, FETCH_NEXT_NEW_QUESTION } from '@/store/type/actions'
import fecthMore from '@/mixin/fectchMore'

export default {
  name: 'homeNew',
  mixins: [fecthMore],
  mounted () {
    this.$store.dispatch(FETCH_QUESTION_NEW)
  },
  computed: {
    ...mapGetters(['isLoading', 'questionList']),
  },
  methods: {
    handelFecthMore() {
      this.$store.dispatch(FETCH_NEXT_NEW_QUESTION)
    }
  }
}
</script>

<style lang="less" scoped>
.question {
  margin-top: 30px;
}
</style>

