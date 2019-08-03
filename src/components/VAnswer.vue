<template>
  <div class="v-answer">
    <div
      v-for="item of answersData"
      :key="item.id"
      class="answer"
    >
      <div class="user">
        <img :src="item.author.avatar">
        <span class="name">{{ item.author.name }}</span>
      </div>
      <div class="content">{{ item.content }}</div>
      <div class="info">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vAnswer',
  props: {
    answersData: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="less" scoped>
.v-answer {
  margin: 0 28px;
  .answer {
    margin-bottom: 32px;
    border: 2px solid @mainColor;
    border-radius: 8px;
    background: #ffffff;
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
        margin: 20px;
      }
    }
    .content {
      padding: 20px;
    }
    .info {
      display: flex;
      font-size: 22px;
      color: @fontColor;
      justify-content: space-between;
      margin: 0 20px 15px 20px;
    }
  }
}
</style>

