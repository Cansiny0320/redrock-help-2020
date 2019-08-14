<template>
  <div class="profile-question">
    <VHeader :titleStr="titleStr" />
    <VLoading v-if="isLoading" />
    <ProfileQuestion :questionData="profileQuestion" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_PROFILE_QUESTION } from '@/store/type/actions'

import ProfileQuestion from '@/components/ProfileQuestion'

export default {
  name: "profileQuestion",
  data () {
    return {
      titleStr: "我提过的问题"
    }
  },
  components: {
    ProfileQuestion,
  },
  beforeRouteEnter (_, from, next) {
    next(vm => {
      if (from.name !== 'question') {
        vm.$store.dispatch(FETCH_PROFILE_QUESTION)
      }
    })
  },
  computed: {
    ...mapGetters(['isLoading', 'profileQuestion']),
  },
}
</script>

<style lang="less" scoped>
</style>
