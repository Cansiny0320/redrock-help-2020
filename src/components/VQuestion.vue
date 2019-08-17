<template>
  <div
    class="v-question"
    v-if="!isLoading"
  >
    <div
      class="no-content"
      v-if="isNoContent"
    >空空如也，快来提一个问题</div>
    <div
      class="question"
      v-for="item of questionData"
      :key="item.id"
      @click="handelQuestionBoxClick(item.id)"
    >
      <div class="user">
        <img
          class="img"
          :src="item.author.avatar | https"
        >
        <span class="name">{{ item.author.name }}</span>
        <span class="time">{{ item.createdAt | date }}</span>
      </div>
      <div class="content" v-text="item.content"></div>
      <div class="info">
        <div class="tags">
          <div
            v-for="innerItem of item.tags"
            :key="innerItem.id"
          >
            {{ innerItem.name }}
          </div>
        </div>
        <div class="count">{{ item.answersCount }} 条回答</div>
      </div>
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_NEXT_QUESTIONS } from '../store/type/actions';

export default {
  name: 'vQuestion',
  props: {
    questionData: {
      type: Array,
      required: true,
    }
  },
  computed: {
    ...mapGetters(['isLoading']),
    isNoContent () {
      return this.questionData.length === 0
    },
  },
  methods: {
    handelQuestionBoxClick (id) {
      this.$router.push({ name: 'question', query: { id } })
    },
  },
}

</script>

<style lang="less" scoped>
.v-question {
  // 这种有具体内容最好不要设定 height 和 width
  margin: 0 28px;
  .no-content {
    text-align: center;
    color: @fontColor;
  }
  .question {
    margin-bottom: 32px;
    border: 2px solid @mainColor;
    border-radius: 8px;
    background: #ffffff;
    .user {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: #a0a0a0;
      .img {
        width: 86px;
        height: 86px;
        border-radius: 86px;
        background: @mainColor;
        margin: 20px;
      }
      .time {
        color: #c7c7c7;
        font-size: 20px;
        margin: 0 20px 0 auto;
      }
    }
    .content {
      @nowrap();
      padding: 0 20px 20px 20px;
    }
    .info {
      display: flex;
      font-size: 22px;
      color: @fontColor;
      justify-content: space-between;
      margin: 0 20px 20px 20px;
      line-height: 40px;
      color: #c7c7c7;
      .count {
        padding: 0 0 0 20px;
        @nowrap();
        min-width: 110px;
        text-align: end;
      }
      .tags {
        display: flex;
        @nowrap();
        div {
          margin: 0 0 0 24px;
          border: 2px solid @mainColor;
          line-height: 40px;
          border-radius: 40px;
          padding: 0 16px;
          color: @mainColor;
          box-sizing: border-box;
          &:nth-child(1) {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>