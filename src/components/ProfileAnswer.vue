<template>
  <div v-if="!isLoading">
    <div
      class="box"
      v-for="item in commentData"
      :key="item.id"
    >
      <div class="comment">{{item.content}}</div>
      <div class="question">来自于问题“{{item.question.content}}”</div>
      <div class="info">
        <div class="time">{{item.createdAt|date}}</div>
        <AnswerAction
        :item = "item"/>
        <div class="delete"></div>
        

      
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_PROFILE_COMMENT } from "@/store/type/actions";
import AnswerOpposeSvg from "@/assets/svg/AnswerOppose.svg"
import AnswerApprovalSvg from "@/assets/svg/AnswerApproval.svg"


import AnswerAction from '@/components/AnswerAction'

export default {
  name: "profileAnswer",
  components: {
    AnswerAction,
    AnswerOpposeSvg,
    AnswerApprovalSvg
  },
  props: {
    commentData: {
      type: Array,
      required: true,
    }
  },
  computed: {
    ...mapGetters(['isLoading'])
  },
};
</script>



<style lang="less" scoped>
.box {
  background: #ffffff;
  height: 160px;
  margin: 30px;
  padding: 30px 30px 20px 30px;
  border-radius: 10px;
  .comment {
    font-size: 40px;
    margin-bottom: 20px;
  }
  .question {
    color: @fontColor;
    font-size: 30px;
    margin-bottom: 30px;
  }
  .info {
    display: flex;
    font-size: 24px;
    line-height: 30px;
    color: @fontColor;
    justify-content: space-between;
    .action {
      margin: 0 30px 0 auto;
    }
    .delete{
      margin-right:-24px;
    }
  }
}
</style>
