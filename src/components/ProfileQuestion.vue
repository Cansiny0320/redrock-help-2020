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
          class="delete"
          @click="handelDeleteClick(item.id)"
        >删除</span>
      </div>
    </div>
    <VToast
      v-if="isShowToast"
      :massage="deleteTipmassage"
      @confirm="handelDeleteConfirm"
      @cancel="handelDeleteCancel"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_DELETE_QUESTION } from '../store/type/actions';

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
      isShowToast: false,
      deleteTipmassage: '',
      deleteId: null,
    }
  },
  computed: {
    ...mapGetters(['isLoading'])
  },
  methods: {
    handelDeleteClick (questionId) {
      this.isShowToast = true
      this.deleteTipmassage = '你真的想要删除该问题吗？'
      this.deleteId = questionId
    },
    handelDeleteConfirm () {
      this.$store.dispatch(FETCH_DELETE_QUESTION, this.deleteId)
      this.isShowToast = false
      this.deleteTipmassage = ''
    },
    handelDeleteCancel () {
      this.isShowToast = false
      this.deleteTipmassage = ''
    },
    handelQuestionClick (questionId) {
      this.$router.push({ name: 'question', query: { id: questionId } })
    }
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
    }
  }
}
</style>
