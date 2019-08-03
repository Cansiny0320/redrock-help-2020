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
      <div
        v-for="(item, index) of showImages"
        :key="index"
        class="item"
      >
        <div class="wapper">
          <img :src="item">
          <div class="tips">+{{ imagesLeftNum }}</div>
        </div>
      </div>
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
    showImages () {
      return this.oneQuestion.photoUrls.slice(0, 1)
    },
    imagesLeftNum () {
      return this.oneQuestion.photoUrls.length
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
}
.content {
  margin: 0 30px 30px 30px;
}
.images {
  display: flex;
  justify-content: space-between;
  padding: 0 20px 30px 20px;
  .item {
    margin: 5px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    .wapper {
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      overflow: hidden;
      img {
        width: 200%;
      }
    }
  }
}
</style>


