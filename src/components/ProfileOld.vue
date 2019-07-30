<template>
  <div class="new">
    <div class="user">
      <img class="img" />
      <span class="name">{{profileData.name}}</span>
    </div>
    <div class="approval">
      <span>我收到的赞同{{profileData.approvalNum}}个</span>
      <div class="front-icon">
        <BaseFront />
      </div>
    </div>
    <div class="oppose">
      <span>我收到的反对{{profileData.opposeNum}}个</span>
      <div class="front-icon">
        <BaseFront />
      </div>
    </div>
    <div class="answer">
      <span>我的回答{{profileData.questionNum}}个</span>
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
.user {
  height: 130px;
  display: flex;
  align-items: center;
  margin: 30px;
  .img {
    width: 140px;
    height: 140px;
    border-radius: 140px;
    background: @mainColor;
  }
  .name {
    color: @fontColor;
    margin-left: 25px;
  }
}
.approval,
.oppose,
.answer {
  width: 690px;
  height: 90px;
  border: 2px solid @mainColor;
  border-radius: 30px;
  margin: 0 auto 30px auto;
  position: relative;
  span {
    line-height: 90px;
    padding-left: 30px;
    color: #6a6a6a;
    font-size: 30px;
  }
  .front-icon {
    position: absolute;
    top: 25px;
    left: 640px;
    svg {
      width: 40px;
      height: 40px;
      path {
        fill: #dfdfde;
      }
    }
  }
}
</style>
