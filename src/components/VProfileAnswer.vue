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
        <div class="action">
          <div>
            <AnswerApprovalSvg />{{item.approvalNum}}人
          </div>
          <div>
            <AnswerOpposeSvg />{{item.opposeNum}}人
          </div>
        </div>
        <div class="delete">删除</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_PROFILE_COMMENT } from "@/store/type/actions";

import AnswerApprovalSvg from "@/assets/svg/AnswerApproval.svg";
import AnswerOpposeSvg from "@/assets/svg/AnswerOppose.svg";

export default {
  name: "VProfileAnswer",
  components: {
    AnswerApprovalSvg,
    AnswerOpposeSvg
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
  padding: 30px;
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
}

.info {
  display: flex;
  font-size: 24px;
  line-height: 30px;
  color: @fontColor;
  justify-content: space-between;
  margin: 0 20px 15px 0px;
  .action {
    display: flex;
    align-items: center;
    color: @fontColor;
    margin: 0 10px 0 190px;
    div {
      display: flex;
      align-items: center;
      margin: 0 8px;
      svg {
        margin: 0 4px;
        height: 30px;
        width: 30px;
      }
      fill: @fontColor;
    }
  }
}
</style>
