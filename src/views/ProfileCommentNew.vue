<template>
  <div>
    <VHeader :titleStr="titleStr" />
    <ProfileComment 
    :isLoading="isLoading" 
    :commentData="commentNewList" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_PROFILE_COMMENT } from "@/store/type/actions";
import ProfileComment from "@/components/ProfileComment";

export default {
  name: "ProfileAnswerNew",
  components: {
    ProfileComment
  },
  data(){
    return{
      paramsResult:""
    }
  },
  mounted() {
    this.$store.dispatch(FETCH_PROFILE_COMMENT);
    this.paramsResult = this.$route.params.content
  },
  computed: {
    ...mapGetters(["isLoading", "commentNewList"]),
    titleStr(){
      console.log(this.paramsResult)
      switch (this.paramsResult) {
        case "comment" :
          return "我收到的评论"
          break;
        case "answers" :
          return "我回答过的问题"
          break;
        case "approval" :
          return "我收到的赞同"
          break;
       case "oppose" :
          return "我收到的反对"
          break;
       default:
         return "false"   

      }
    }
  }
};
</script>

<style lang="less" scoped>
</style>
