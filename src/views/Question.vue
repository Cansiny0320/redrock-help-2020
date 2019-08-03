<template>
  <div
    class="qustion"
    v-if="!isLoading"
  >
    <VHeader titleStr="问题详情" />
    <div class="user">
      <img :src="oneQuestion.author.avatar">
      <span class="name">{{ oneQuestion.author.name }}</span>
    </div>
    <div class="content">
      {{ oneQuestion.content }}
    </div>
    <div class="images">
      <VImage :imagesUrl="oneQuestion.photoUrls" />
    </div>
    <VAnswer :answersData="oneQuestion.answer" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_ONE_QUESTION_BY_ID } from '@/store/type/actions'

export default {
  name: 'qustion',
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
}
.content {
  margin: 0 30px 30px 30px;
}
.images {
  padding: 0 30px 30px 30px;
}
</style>


