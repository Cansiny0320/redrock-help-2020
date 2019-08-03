<template>
  <div class="profile-new">
    <div class="user">
      <img
        class="img"
        :src="profileData.avatar"
      />
      <span class="name">{{profileData.name}}</span>
    </div>

    <router-link :to="{name:'questionNew'}">
    <div class="question">
      <span>我提过的问题{{profileData.questionsNum}}个</span>
      <div class="front-icon">
        <BaseFront />
      </div>
    </div>
    </router-link>

    <div class="comment">
      <span>我收到的评论{{profileData.answersNum}}个</span>
      <div class="front-icon">
        <BaseFront />
      </div>
    </div>
  </div>
</template>

<script>
import BaseFront from "@/assets/svg/BaseFront.svg";
export default {
  name: "ProfileNew",
  components: {
    BaseFront
  },
  props: {
    isLoadingIdentity: {
      type: Boolean,
      required: false
    },
    profileData: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
@import '../assets/styles/profile.less';
</style>
