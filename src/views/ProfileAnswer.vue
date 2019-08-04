<template>
  <div class="profile-answer">
    <VHeader :titleStr="titleStr" />
    <VProfileAnswer
      :commentData="profileAnswer"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_PROFILE_ANSWER } from "@/store/type/actions";

export default {
  name: "profileAnswer",
  data () {
    return {
      paramsResult: ""
    }
  },
  created () {
    this.$store.dispatch(FETCH_PROFILE_ANSWER);
    this.paramsResult = this.$route.query.type
  },
  computed: {
    ...mapGetters(["isLoading", "profileAnswer"]),
    titleStr () {
      switch (this.paramsResult) {
        case "comment":
          return "我收到的评论"
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
