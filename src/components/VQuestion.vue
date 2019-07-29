<template>
  <div class="box">
    <div class="question" v-for="item of questionHot" :key="item.id">
      <div class="user">
        <img class="img" :src="item.author.avatar">
        <span class="name">{{ item.author.name }}</span>
      </div>
      <div class="content">{{ item.content }}</div>
      <div class="info"></div>
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_QUESTION_HOT } from '@/store/type/actions'
export default {
  name: 'vQuestion',
  mounted () {
    this.$store.dispatch(FETCH_QUESTION_HOT)
  },
  computed: {
    ...mapGetters(['isLoadingQuestionHot', 'questionHot']),
  },
}

</script>

<style lang="less" scoped>
.box {
  // 这种有具体内容最好不要设定 height 和 width  
  margin: 50px 30px 0 30px;
  .question {
    margin-bottom: 32px;
    border: 2px solid @mainColor;
    border-radius: 30px;
    background: #ffffff;
    .user {
      height: 130px;
      display: flex;
      align-items: center;
      .img {
        width: 90px;
        height: 90px;
        border-radius: 90px;
        background: @mainColor;
        margin: 20px;
      }
      .name {
        color: @fontColor;
      }
    }
    .content {
      padding: 20px;
    }
  }
}
</style>