<template>
  <div
    class="qustion no-footer"
    :class="{ nocontent: !oneQuestion.answer.length }"
  >
    <VHeader />
    <VLoading v-if="isLoading" />
    <template v-else>
      <div class="top">
        <div class="content" v-text="oneQuestion.content"></div>
        <div class="user">
          <img :src="oneQuestion.author.avatar" />
          <span class="name">{{ oneQuestion.author.name }}</span>
          <span class="count"> {{ oneQuestion.answersCount }}人回答</span>
          <template>
            <span
              class="status"
              :class="{ active: isStautsActive }"
              v-if="isStautsActive"
              >已解决</span
            >
            <span
              class="status"
              v-else-if="isAnswered && isShowStatus"
              :class="{ active: isAnswered }"
              >已回答</span
            >
            <span
              class="status"
              @click="toAnswserEdit(oneQuestion.status)"
              v-else-if="isShowStatus"
              :class="{ limited: limited }"
              >去回答</span
            >
          </template>
        </div>
      </div>
      <Answer :answersData="oneQuestion.answer" class="answer" />
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_ONE_QUESTION_BY_ID } from '@/store/type/actions'

import Answer from '@/components/Answer'

export default {
    name: 'qustion',
    components: {
        Answer,
    },
    mounted() {
        this.$store.dispatch(FETCH_ONE_QUESTION_BY_ID, this.$route.query.id)
    },
    computed: {
        ...mapGetters(['oneQuestion', 'isLoading']),
        isAnswered() {
            let markAnswerCount = 0
            this.oneQuestion.answer.map(item => {
                if (String(item.author.stuNum) === String(localStorage.getItem('stuNum'))) {
                    markAnswerCount++
                }
            })
            return markAnswerCount > 0
        },

        isShowStatus() {
            return parseInt(localStorage.getItem('role')) === 0
        },
        isStautsActive() {
            return this.oneQuestion.status === '已解决'
        },
        limited() {
            return this.oneQuestion.answersCount >= 30;
        }
    },
    methods: {
        toAnswserEdit(status) {
            if (!this.limited) {
                this.$router.push({
                    name: 'answserEdit',
                })
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/nofooter.less';
.qustion {
  background-color: @backgroundColor;
  min-height: calc(100vh - 98px);
  &.nocontent {
    background-color: #fff;
  }
  .top {
    background-color: #fff;
    padding: 27px 24px 24px 24px;
    .content {
      word-wrap: break-word;
      font-size: 32px;
      color: @fontColor;
      margin-bottom: 23px;
      font-weight: bold;
      line-height: 45px;
      text-align: justify;
    }
    .user {
      display: flex;
      align-items: center;
      color: @fontColor;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: @mainColor;
        margin-right: 8px;
        margin-left: 1px;
      }
      .name {
        font-size: 24px;
        color: @fontLightColor;
        margin-right: 22px;
        font-weight: 500;
      }
      .count {
        font-size: 24px;
        color: #808080;
      }
      .status {
        font-size: 28px;
        margin-left: auto;
        font-weight: bold;
        color: @mainColor;
        &.active {
          color: #808080;
          font-weight: 400;
        }
        &.limited {
          color: #808080;
        }
      }
    }
  }
  .answer {
    margin-top: 11px;
  }
}
</style>


