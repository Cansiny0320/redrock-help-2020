<template>
  <div v-if="!isLoading">
    <div
      class="box"
      v-for="item in commentData"
      :key="item.ansId"
      @click.self="handelQuestionClick(item.question.queId)"
    >
      <div class="comment">{{item.content}}</div>
      <div class="question">来自于问题“{{item.question.content}}”</div>
      <div class="info">
        <div class="time">{{item.createdAt|date}}</div>
        <AnswerAction
          @touchstart.prevent
          @click.prevent
          class="action"
          :item="item"
        />
        <div
          class="delete"
          @click="handelDeleteClick(item.ansId)"
        >删除</div>
      </div>
    </div>
    <VToast
      v-show="isShowToast"
      :massage="deleteTipmassage"
      @confirm="handelDeleteConfirm"
      @cancel="handelDeleteCancel"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_PROFILE_COMMENT, FETCH_DELETE_ANSWER } from "@/store/type/actions";

import AnswerAction from '@/components/AnswerAction'

export default {
  name: "profileAnswer",
  components: {
    AnswerAction,
  },
  data () {
    return {
      isShowToast: false,
      deleteTipmassage: '',
      deleteId: null,
    }
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
  methods: {
    handelDeleteClick (answerId) {
      this.isShowToast = true
      this.deleteTipmassage = '你真的想要删除该回答吗？'
      this.deleteId = answerId
    },
    handelDeleteConfirm () {
      this.$store.dispatch(FETCH_DELETE_ANSWER, this.deleteId)
      this.isShowToast = false
      this.deleteTipmassage = ''
    },
    handelDeleteCancel () {
      this.isShowToast = false
      this.deleteTipmassage = ''
    },
    handelQuestionClick (questionId) {
      this.$router.push({ name: 'question', query: { id: questionId } })
    },
  }
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
    @nowrap();
    font-size: 40px;
    margin-bottom: 20px;
  }
  .question {
    @nowrap();
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
  }
}
</style>
