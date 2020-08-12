<template>
  <div v-if="!isLoading">
    <div
      class="box"
      v-for="item in commentData"
      :key="item.id"
      @click="handelQuestionClick(item.questions.id)"
    >
      <div class="question">{{ item.questions.content }}</div>
      <div class="comment">{{ item.content }}</div>
      <div class="imgs">
        <img
          :src="`${imgUrl}/getImage?imageName=${item.split('/')[3]}`"
          v-for="item of item.photoUrls"
          :key="item"
        />
      </div>
      <div class="info">
        <div class="time">{{ item.createdAt | date }}</div>
        <div class="v-answer-action">
          <div class="item">
            <img src="~@/assets/images/like.png" class="like" />
            <span class="num">{{ item.approvalNum }}</span>
          </div>
        </div>
        <div class="delete" @click.stop="handelDeleteClick(item.id)">
          删除
        </div>
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
import { API_URL } from '@/common/config';

import { mapGetters } from "vuex";
import { FETCH_PROFILE_COMMENT, FETCH_DELETE_ANSWER } from "@/store/type/actions";
import AnswerAction from '@/components/AnswerAction'
export default {
    name: "profileAnswer",
    components: {
        AnswerAction
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
        imgUrl() {
            return API_URL;
        },
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
};
</script>



<style lang="less" scoped>
.box {
  background: #ffffff;
  margin: 20px 24px;
  padding: 28px 24px;
  border-radius: 10px;
  .comment {
    word-wrap: break-word;
    @nowrap();
    font-size: 28px;
    color: #404040;
    margin: 20px 0;
    letter-spacing: 0.4px;
  }
  .question {
    @nowrap();
    color: @fontColor;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 0.4px;
  }
  .imgs {
    img {
      width: 211px;
      height: 211px;
      margin-right: 10px;
      border-radius: 5px;
      vertical-align: top;
      object-fit: cover;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .info {
    display: flex;
    align-items: center;
    font-size: 22px;
    color: #808080;
    margin-top: 20px;
    .v-answer-action {
      display: flex;
      align-items: center;
      margin-left: 55px;
      .item {
        display: flex;
        // align-items: center;
        .like {
          width: 22px;
          height: 22px;
        }
        .num {
          margin-left: 8px;
        }
        svg {
          width: 25px;
          height: 25px;
        }
        fill: #808080;
        &.active {
          fill: @mainColor;
          color: @mainColor;
        }
      }
    }
    .delete {
      margin-left: auto;
      font-size: 24px;
      vertical-align: text-top;
      width: 98px;
      text-align: center;
      line-height: 49px;
      border-radius: 100px;
      color: @mainColor;
      border: 1px solid @mainColor;
      font-weight: 500;
      letter-spacing: 1.6px;
    }
  }
}
</style>
