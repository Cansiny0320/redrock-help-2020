<template>
  <div class="v-question">
    <div
      class="question"
      v-for="item of questionData"
      :key="item.id"
    >
      <div class="user">
        <img
          class="img"
          :src="item.author.avatar"
        >
        <span class="name">{{ item.author.name }}</span>
        <span class="time">{{ item.updatedAt | date }}</span>
      </div>
      <div class="content">{{ item.content }}</div>
      <div class="info"></div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'vQuestion',
  props: {
    isLoading: {
      type: Boolean,
      required: false,
    },
    questionData: {
      type: Array,
      required: true,
    }
  }
}

</script>

<style lang="less" scoped>
.v-question {
  // 这种有具体内容最好不要设定 height 和 width
  margin: 0 28px;
  .question {
    margin-bottom: 32px;
    border: 2px solid @mainColor;
    border-radius: 30px;
    background: #ffffff;
    .user {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: @fontColor;
      .img {
        width: 86px;
        height: 86px;
        border-radius: 86px;
        background: @mainColor;
        margin: 20px;
      }
      .time {
        margin: 0 20px 0 auto;
      }
    }
    .content {
      padding: 20px;
    }
  }
}
</style>