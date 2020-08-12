<template>
  <div class="new profile-item">
    <div class="user">
      <img class="img" :src="profileData.author.avatar" />
      <div class="name">{{ profileData.author.name }}</div>
    </div>
    <router-link class="answer" to="/profile/answer" tag="div">
      <span class="item"
        >我回答的问题：
        <span class="num">{{ profileData.author.answersNum }}</span>
        <span class="text">个</span></span
      >
      <div class="front-icon">
        <BaseFront />
      </div>
    </router-link>
    <router-link class="approval" to="/profile/approval" tag="div">
      <span class="item"
        >我收到的赞同：
        <span class="num">{{ profileData.number.approvalNum }}</span>
        <span class="text">个</span></span
      >
      <div class="front-icon">
        <BaseFront />
      </div>
    </router-link>

    <!-- <div class="oppose" @click="handleClick('oppose')">
            <span>我收到的反对 {{ profileData.number.opposeNum }} 个</span>
            <div class="front-icon">
                <BaseFront />
            </div>
        </div> -->
  </div>
</template>

<script>
import BaseFront from "@/assets/svg/BaseFront.svg";
export default {
    name: "ProfileOld",
    components: {
        BaseFront,
    },
    props: {
        profileData: {
            type: Object,
            required: true
        }
    },
    methods: {

    }
};
</script>

<style lang="less" scoped>
@import '../assets/styles/profile.less';
</style>
