<template>
  <div class="profile-answer">
    <VHeader :titleStr="titleStr" />
    <VLoading v-if="isLoading" />
    <ProfileAnswer
      v-else
      :commentData="profileAnswer"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_PROFILE_ANSWER, FETCH_PROFILE_APPROVAL, FETCH_PROFILE_OPPOSE } from "@/store/type/actions";

import ProfileAnswer from '@/components/ProfileAnswer'

export default {
  name: "profileAnswer",
  data () {
    return {
      paramsResult: ""
    }
  },
  components: {
    ProfileAnswer,
  },
  beforeRouteEnter (_, from, next) {
    next(vm => {
      if (from.name !== 'question') {
        vm.paramsResult = vm.$route.query.type
        if (vm.paramsResult === 'approval') {
          vm.$store.dispatch(FETCH_PROFILE_APPROVAL);
        } else if (vm.paramsResult === 'oppose') {
          vm.$store.dispatch(FETCH_PROFILE_OPPOSE)
        } else {
          vm.$store.dispatch(FETCH_PROFILE_ANSWER)
        }
      }
    })
  },
  computed: {
    ...mapGetters(["isLoading", "profileAnswer"]),
    titleStr () {
      switch (this.paramsResult) {
        case "comment":
          return "我收到的回答"
          break;
        case "answers":
          return "我回答过的问题"
          break;
        case "approval":
          return "我收到的赞同"
          break;
        case "oppose":
          return "我收到的反对"
          break;
        default:
          return ""
      }
    }
  }
};
</script>

<style lang="less" scoped>
</style>
