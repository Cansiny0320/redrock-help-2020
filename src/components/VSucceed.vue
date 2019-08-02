<template>
  <div>
    <div class="back"
    v-on:touchstart.prevent></div>

    <div class="tip">
    <p>删除成功!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VSucceed"
};
</script>

<style lang = "less" scoped>
.back {
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background: #c3c4c6;
  opacity: 0.5;
}
.tip{
  border-radius: 10px;
  height: 75px;
  width: 310px;
  background: #9a9a9b;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  p{
      color: #ffffff;
      text-align: center;
      line-height: 75px;
  }
 
  
}
</style>
