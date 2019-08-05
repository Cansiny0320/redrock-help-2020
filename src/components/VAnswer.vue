<template>
  <div class="v-answer">
    <div
      v-for="item of answersData"
      :key="item.id"
      class="answer"
    >
      <div class="user">
        <img :src="item.author.avatar">
        <span class="name">{{ item.author.name }}</span>
      </div>
      <div class="content">{{ item.content }}</div>
      <div class="images">
        <VImage :imagesUrl="item.photoUrls" />
      </div>
      <div class="info">
        <div class="time">{{ item.createdAt | date }}</div>
        <div class="action">
          <div
            :class="{ active: item.isApproval }"
            @click="handelApprovalClick(item.id, item.isOppose)"
          >
            <AnswerApprovalSvg />
            {{ item.approvalNum }}
          </div>
          <div
            :class="{ active: item.isOppose }"
            @click="handelOpposeClick(item.id, item.isApproval)"
          >
            <AnswerOpposeSvg />
            {{ item.opposeNum }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {  
  FETCH_ANSWER_APPROVAL,
  FETCH_ANSWER_OPPOSE,
} from '@/store/type/actions'

import AnswerApprovalSvg from '@/assets/svg/AnswerApproval.svg'
import AnswerOpposeSvg from '@/assets/svg/AnswerOppose.svg'

export default {
  name: 'vAnswer',
  props: {
    answersData: {
      type: Array,
      required: true,
    }
  },
  components: {
    AnswerApprovalSvg,
    AnswerOpposeSvg,
  },
  methods: {
    handelApprovalClick (answerId, isOppose) {
      if (!isOppose) this.$store.dispatch(FETCH_ANSWER_APPROVAL, answerId)
    },
    handelOpposeClick (answerId, isApproval) {
      if (!isApproval) this.$store.dispatch(FETCH_ANSWER_OPPOSE, answerId)
    }
  }
}
</script>

<style lang="less" scoped>
.v-answer {
  margin: 0 28px;
  .answer {
    margin-bottom: 32px;
    border: 2px solid @mainColor;
    border-radius: 8px;
    background: #ffffff;
    .user {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: @fontColor;
      img {
        width: 86px;
        height: 86px;
        border-radius: 86px;
        background: @mainColor;
        margin: 20px;
      }
    }
    .content {
      padding: 20px;
    }
    .images {
      margin: 0 10px 20px 10px;
    }
    .info {
      display: flex;
      font-size: 24px;
      line-height: 30px;
      color: @fontColor;
      justify-content: space-between;
      margin: 0 20px 15px 20px;
      .action {
        display: flex;
        align-items: center;
        color: @fontColor;
        div {
          display: flex;
          align-items: center;
          margin: 0 10px;
          svg {
            margin: 0 4px;
            height: 30px;
            width: 30px;
          }
          fill: @fontColor;
          &.active {
            fill: @mainColor;
            color: @mainColor;
          }
        }
      }
    }
  }
}
</style>

