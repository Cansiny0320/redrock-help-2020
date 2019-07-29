<template>
  <div>
    <div class="question">
      <div class="user">
        <img class="img">
        <span class="name"></span>
      </div>
      <div class="content"></div>
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
.question {
  width: 690px;
  height: 230px;
  border: 2px solid @mainColor;
  border-radius: 30px;
  position: relative;
  top: 320px;
  margin: 0 auto;
  background: #ffffff;

  .user {
    height: 130px;
    display: flex;
    align-items: center;

    .img {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background: @mainColor;
      margin: 20px;
    }
    .name {
      color: @fontColor;
    }
  }
  .content {
    margin-left: 20px;
  }
}
</style>