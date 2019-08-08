<template>
  <div
    class="profile-question"
    v-if="!isLoading"
  >
    <div
      class="box"
      v-for="item of questionData"
      :key="item.id"
    >
      <p
        class="content"
        @click="handelQuestionClick(item.id)"
      >{{item.content}}</p>

      <div class="tips">
        <span class="time">{{item.createdAt | date}}</span>
        <span class="comment">{{item.answersCount}}条评论</span>
        <span
          class="solve"
          @click="handelSolveClick(item.id)"
          v-if="item.status === '未解决'"
        >解决该问题</span>

        <span
          class="delete"
          @click="handelDeleteClick(item.id)"
        >删除</span>
      </div>
    </div>
    <VToast
      v-if="isShowDeleteToast"
      :massage="deleteTipmassage"
      @confirm="handelDeleteConfirm"
      @cancel="handelDeleteCancel"
    />
    <VToast
      v-if="isShowSolveToast"
      :massage="SolveTipmassage"
      @confirm="handelSolveConfirm"
      @cancel="handelSolveCancel"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_DELETE_QUESTION, FETCH_QUESTION_SOLVE } from '../store/type/actions';

export default {
  name: "ProfileQuestion",
  props: {
    questionData: {
      type: Array,
      required: true,
    }
  },
  data () {
    return {
      isShowDeleteToast: false,
      deleteTipmassage: '你真的想要删除该问题吗？',
      isShowSolveToast: false,
      SolveTipmassage: '设置“已解决”后你的问题将无法再回复, 确定设置吗？',
      deleteId: null,
      solveId: null,
    }
  },
  computed: {
    ...mapGetters(['isLoading'])
  },
  methods: {
    handelDeleteClick (questionId) {
      this.isShowDeleteToast = true
      this.deleteTipmassage = '你真的想要删除该问题吗？'
      this.deleteId = questionId
    },
    handelDeleteConfirm () {
      this.$store.dispatch(FETCH_DELETE_QUESTION, this.deleteId)
      this.isShowDeleteToast = false
      this.deleteId = null
    },
    handelDeleteCancel () {
      this.isShowDeleteToast = false
      this.deleteId = null
    },
    handelSolveClick (questionId) {
      this.isShowSolveToast = true
      this.solveId = questionId
    },
    handelSolveConfirm () {
      this.$store.dispatch(FETCH_QUESTION_SOLVE, this.solveId)
      this.isShowSolveToast = false
      this.solveId = null
    },
    handelSolveCancel () {
      this.isShowSolveToast = false
      this.solveId = null
    },
    handelQuestionClick (questionId) {
      this.$router.push({ name: 'question', query: { id: questionId } })
    },
  },
}
</script>

<style lang="less" scoped>
.box {
  background: #ffffff;
  height: 95px;
  margin: 30px;
  padding: 30px;
  border-radius: 10px;
  .content {
    height: 40px;
    margin-bottom: 30px;
    font-size: 36px;
    @nowrap();
  }
  .tips {
    display: flex;
    span {
      color: @fontColor;
      font-size: 24px;
      &.comment {
        display: block;
        margin: 0 30px 0 auto;
      }
      &.solve {
        margin-right: 30px;
      }
    }
  }
}
</style>
