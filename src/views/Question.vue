<template>
  <div class="qustion">
    <QuestionReplyButton v-if="isShowQuestionReplyButton" />
    <VHeader titleStr="问题详情" />
    <VLoading v-if="isLoading" />
    <template v-else>
      <div class="user">
        <img :src="oneQuestion.author.avatar | https">
        <span class="name">{{ oneQuestion.author.name }}</span>
        <span class="status" :class="{ active : isStautsActive  }">{{ oneQuestion.status }}</span>
      </div>
      <div class="content">
        {{ oneQuestion.content }}
      </div>
      <div class="images">
        <VImage :imagesUrl="oneQuestion.photoUrls" />
      </div>
      <Answer :answersData="oneQuestion.answer" />
    </template>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_ONE_QUESTION_BY_ID } from '@/store/type/actions'

import QuestionReplyButton from '@/components/QuestionReplyButton'
import Answer from '@/components/Answer'

export default {
  name: 'qustion',
  components: {
    QuestionReplyButton,
    Answer,
  },
  mounted () {
    this.$store.dispatch(FETCH_ONE_QUESTION_BY_ID, this.$route.query.id)
  },
  computed: {
    ...mapGetters(['oneQuestion', 'isLoading']),
    isShowQuestionReplyButton() {
      let markAnswerCount = 0
      this.oneQuestion.answer.map(item=>{
        if (String(item.author.stuNum) === String(localStorage.getItem('stuNum'))) {
          markAnswerCount++
        }
      })
      return this.oneQuestion.answer.length < 31 
        && this.oneQuestion.status === '未解决' 
        && parseInt(localStorage.getItem('role')) === 0
        && markAnswerCount === 0
    },
    isStautsActive() {
      return this.oneQuestion.status === '已解决'
    }
  }
}
</script>

<style lang="less" scoped>
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
    margin: 30px;
  }
  .status {
    font-size: 24px;
    margin: 0 30px 0 auto;
    &.active {
      color: @mainColor;
    }
  }
}
.content {
  line-height: 40px;
  margin: 0 30px 30px 30px;
}
.images {
  padding: 0 30px 30px 30px;
}
</style>


