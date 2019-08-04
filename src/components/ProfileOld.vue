<template>
  <div class="new">

    <div class="user">
      <img class="img" :src="profileData.avatar"/>
      <span class="name">{{profileData.name}}</span>
    </div>

    <div 
    class="approval"
    @click="handleClick('approval')">
      <span>我收到的赞同{{profileData.approvalNum}}个</span>
      <div class="front-icon">
        <BaseFront />
      </div>
    </div>

    <div 
    class="oppose"
    @click="handleClick('oppose')">
      <span>我收到的反对{{profileData.opposeNum}}个</span>
      <div class="front-icon">
        <BaseFront />
      </div>
    </div>

    <div 
    class="answer"
    @click="handleClick('answers')">
      <span>我的回答{{profileData.questionsNum}}个</span>
      <div class="front-icon">
        <BaseFront />
      </div>
    </div>

  </div>
</template>

<script>
import BaseFront from "@/assets/svg/BaseFront.svg";
export default {
  name: "ProfileOld",
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
  },
  methods:{
     handleClick(content) {
      this.$router.push({ name: 'commentNew', params: { content } })
      
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/styles/profile.less";
</style>
