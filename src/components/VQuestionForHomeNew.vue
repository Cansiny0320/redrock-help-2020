<template>
  <div class="v-question-home" v-if="!isLoading">
    <div class="no-content" v-if="isNoContent">
      空空如也，快来提一个问题
    </div>
    <div
      class="question"
      v-for="item of questionData"
      :key="item.id"
      @click="handelQuestionBoxClick(item.id)"
    >
      <div class="content" v-text="item.content"></div>
      <div class="user">
        <img class="img" :src="item.author.avatar" />

        <div class="name">{{ item.author.name }}</div>
        <div class="time">
          {{ item.createdAt | date }}
        </div>
      </div>
      <div class="anwser" v-text="item.content" v-if="false"></div>
      <div class="info">
        <div
          class="tag"
          v-for="tag of item.tags.slice(0, showTagNum)"
          :key="tag.id"
        >
          #{{ tag.name }}#
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
    name: 'vQuestionForHomeNew',
    props: {
        questionData: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            showTagNum: 2,
        }
    },
    computed: {
        ...mapGetters(['isLoading']),
        isNoContent() {
            return this.questionData.length === 0
        }
    },
    methods: {
        handelQuestionBoxClick(id) {
            this.$router.push({ name: 'question', query: { id } })
        },
    },
}

</script>

<style lang="less" scoped>
.v-question-home {
  // 这种有具体内容最好不要设定 height 和 width
  margin: 0 24px;

  .no-content {
    text-align: center;
    color: @fontColor;
  }
  .question {
    margin-bottom: 20px;
    border-radius: 12px;
    background: #ffffff;
    color: @fontColor;
    padding-bottom: 28px;
    border-radius: 12px;
    padding: 28px 24px;
    .user {
      display: flex;
      align-items: center;
      margin-top: 16px;
      .name {
        font-size: 24px;
        color: @fontLightColor;
      }
      .time {
        color: #999;
        font-size: 22px;
        margin-left: auto;
      }
      .img {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background: @mainColor;
        margin-right: 18px;
      }
    }
    .content {
      word-wrap: break-word;
      font-weight: bold;
      line-height: 40px;
      font-size: 32px;
      @ellisis-2();
    }
    .anwser {
      @ellisis-2();
      font-size: 28px;
      line-height: 36px;
      margin: 32px 0 0;
    }
    .info {
      margin-top: 20px;
      color: #c7c7c7 !important;
      display: flex;
      font-size: 28px;
      color: @fontColor;
      .tag {
        padding: 0 10px;
        margin-right: 10px;
        font-size: 26px;
        color: @mainColor;
      }
      .count {
        margin-left: auto;
        font-size: 24px;
        color: #808080;
      }
    }
  }
}
</style>