<template>
  <div class="profile-new">
    <div class="user">
      <img
        class="img"
        :src="profileData.author.avatar | https"
      />
      <span class="name">{{profileData.author.name}}</span>
    </div>

    <div
      class="question"
      @click="handleProfileQuestionClick(profileData.id)"
    >
      <span>我提过的问题 {{profileData.author.questionsNum}} 个</span>
      <div class="front-icon">
        <BaseFront />
      </div>
    </div>

    <!-- <div
      class="comment"
      @click="handleProfileAnswerClick('comment')"
    >
      <span>我收到的评论 {{profileData.answersNum}} 个</span>
      <div class="front-icon">
        <BaseFront />
      </div>
    </div> -->

  </div>
</template>

<script>
import BaseFront from "@/assets/svg/BaseFront.svg";
export default {
  name: "profileNew",
  components: {
    BaseFront
  },
  props: {
    profileData: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleProfileQuestionClick (id) {
      this.$router.push({ name: 'profileQuestion', query: { id } })
    },
    handleProfileAnswerClick (type) {
      this.$router.push({ name: 'profileAnswer', query: { type } })
    },
  }
};
</script>

<style lang="less" scoped>
@import "../assets/styles/profile.less";
</style>
