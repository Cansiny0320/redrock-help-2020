<template>
  <div class="qustion">
    <QuestionReplyButton />
    <VHeader titleStr="问题详情" />
    <template v-if="!isLoading">
      <div class="user">
        <img :src="oneQuestion.author.avatar">
        <span class="name">{{ oneQuestion.author.name }}</span>
        <span class="status">{{ oneQuestion.status }}</span>
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
    margin: 0 30px 0 auto;
  }
}
.content {
  margin: 0 30px 30px 30px;
}
.images {
  padding: 0 30px 30px 30px;
}
</style>


