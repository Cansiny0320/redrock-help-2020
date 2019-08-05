<template>
  <div class="profile-question" v-if="!isLoading">
    <div
      class="box"
      v-for="item of questionData"
      :key="item.id"
    >
      <p class="content">{{item.content}}</p>

      <div class="tips">
        <span class="time">{{item.createdAt | date}}</span>
        <span class="comment">{{item.answersCount}}条评论</span>
        <span class="delete">删除</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProfileQuestion",
  props: {
    questionData: {
      type: Array,
      required: true,
    }
  },
  computed: {
    ...mapGetters(['isLoading'])
  },
}
</script>

<style lang="less" scoped>
.box {
  background: #ffffff;
  height: 95px;
  margin: 30px;
  padding: 30px;
  border-radius: 10px;
  .content {
    height: 40px;
    margin-bottom: 30px;
    font-size: 36px;
  }
  .tips {
    display: flex;
    span {
      color: #a6a6a6;
      font-size: 24px;
    }
    .comment {
      display: block;
      margin: 0 45px 0 300px;
    }
  }
}
</style>
