<template>
  <div>
    <div
      class="placeholder-content"
      v-for="item of array"
      :key="item"
    >
      <div class="placeholder-content_item"></div>
      <div class="placeholder-content_item"></div>
      <div class="placeholder-content_item"></div>
      <div class="placeholder-content_item"></div>
      <div class="placeholder-content_item"></div>
      <div class="placeholder-content_item"></div>
      <div class="placeholder-content_item"></div>
      <div class="placeholder-content_item"></div>
      <div class="placeholder-content_item"></div>
      <div class="placeholder-content_item"></div>
      <div class="placeholder-content_item"></div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'vLoading',
  data () {
    return {
      array: Array(4)
    }
  }
}
</script>

<style lang="less" scoped>
.placeholder-content {
  height: 205px;
  overflow: hidden;
  background: #000;
  position: relative;

  // Animation
  animation-duration: 1.7s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: placeholderAnimate;
  background: #f6f7f8; // Fallback
  background: linear-gradient(to right, #eee 2%, #ddd 18%, #eee 33%);
  background-size: 1300px; // Animation Area

  &_item {
    width: 100%;
    height: 20px;
    position: absolute;
    background: @backgroundColor;
    z-index: 2;

    &:after,
    &:before {
      width: inherit;
      height: inherit;
      content: "";
      position: absolute;
    }

    &:nth-child(1) {
      top: 0;
      left: 0;
    }

    &:nth-child(2) {
      top: 20px;
      left: 0;
      width: 30px;
      height: 90px;
    }

    &:nth-child(3) {
      top: 0px;
      left: 0;
      width: 30px;
      height: 100%;
    }

    &:nth-child(4) {
      top: 20px;
      width: 20px;
      left: 170px;
      height: 90px;
    }

    &:nth-child(5) {
      top: 40px;
      left: 190px;
      height: 12px;
    }

    &:nth-child(6) {
      top: 75px;
      left: 190px;
      height: 12px;
    }

    &:nth-child(7) {
      top: 20px;
      right: 0;
      width: 23%;
      height: 20px;
    }

    &:nth-child(8) {
      top: 0;
      right: 0;
      width: 30px;
      height: 100%;
    }

    &:nth-child(9) {
      top: 110px;
      height: 17px;
      left: 0;
    }

    &:nth-child(10) {
      top: 149px;
      height: 12px;
      left: 0;
    }

    &:nth-child(11) {
      top: 183px;
      left: 0;
      height: 100%;
    }
  }
}

@keyframes placeholderAnimate {
  0% {
    background-position: -650px 0;
  }
  100% {
    background-position: 650px 0;
  }
}
</style>