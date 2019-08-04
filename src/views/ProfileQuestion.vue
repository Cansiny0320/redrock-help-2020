<template>
  <div class="profile-question">
    <VHeader :titleStr="titleStr" />
    <VProfileQuestion
      :questionData="profileQuestion"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_PROFILE_QUESTION } from '@/store/type/actions'

export default {
  name: "profileQuestion",
  data () {
    return {
      titleStr: "我提过的问题"
    }
  },
  mounted () {
    this.$store.dispatch(FETCH_PROFILE_QUESTION)
  },
  computed: {
    ...mapGetters(['isLoading', 'profileQuestion']),
  },
}
</script>

<style lang="less" scoped>
</style>
