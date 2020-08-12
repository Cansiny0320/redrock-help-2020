<template>
  <div v-if="!isLoading">
    <VToast
      v-show="isShowToast"
      :massage="deleteTipmassage"
      @confirm="handelDeleteConfirm"
      @cancel="handelDeleteCancel"
    />
    <div
      class="box"
      v-for="item in commentData"
      :key="item.id"
      @click="handelQuestionClick(item.questions.id)"
    >
      <div class="user">
        <div class="avatar">
          <img :src="item.author.avatar" />
        </div>
        <div class="info">
          <div class="name">{{ item.author.name }}</div>
          <div class="time">{{ item.createdAt | date }}</div>
        </div>
      </div>
      <div class="comment" v-if="item.content">{{ item.content }}</div>
      <div class="approval" v-else>赞了这个回答</div>
      <div class="question">{{ item.questions.content }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "profileComment",
    components: {

    },
    data() {
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
        handelDeleteClick(answerId) {
            this.isShowToast = true
            this.deleteTipmassage = '删除后不可恢复，确认删除吗？'
            this.deleteId = answerId
        },
        handelDeleteConfirm() {
            this.$store.dispatch(FETCH_DELETE_ANSWER, this.deleteId)
            this.isShowToast = false
            this.deleteTipmassage = ''
        },
        handelDeleteCancel() {
            this.isShowToast = false
            this.deleteTipmassage = ''
        },
        handelQuestionClick(questionId) {
            this.$router.push({ name: 'question', query: { id: questionId } })
        },
    }
}
</script>

<style lang="less" scoped>
.box {
  background: #ffffff;
  padding: 25px 27px 28px 21px;
  border-bottom: 1px solid rgba(229, 229, 229, 1);
  &:last-child {
    border-bottom: 1px solid transparent;
  }
  .user {
    display: flex;
    .avatar {
      width: 60px;
      height: 60px;
      margin-right: 16px;
      img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 60px;
      .name {
        font-size: 28px;
        font-weight: 800;
        color: rgba(51, 51, 51, 1);
      }
      .time {
        font-size: 22px;
        font-weight: 400;
        color: rgba(128, 128, 128, 1);
      }
    }
  }
  .comment {
    @ellisis-2();
    word-wrap: break-word;
    font-size: 28px;
    font-weight: 500;
    color: rgba(64, 64, 64, 1);
    line-height: 36px;
    margin: 27px 0 14px;
    padding: 0 18px 0 3px;
  }
  .approval {
    font-size: 28px;
    font-weight: 500;
    color: #333333;
    margin: 27px 0 16px;
  }
  .question {
    @nowrap();
    font-size: 26px;
    font-weight: 500;
    color: #666666;
    line-height: 32px;
    padding: 16px 27px 14px 27px;
    background: #f5f5f5;
    border-radius: 4px;
  }
}
</style>