<template>
  <div @touchstart.prevent>
    <div id="back"></div>

    <div class="tipBox">
      <div class="require">
        <p>设置后你的问题将不被回复，确认设置吗？</p>
      </div>
      <div class="button">
        <p class="cancel">取消</p>
        <p class="confirm">确认</p>
      </div>
    </div>

    <div
      class="tip"
      v-if="isSucceed"
    >
      <p>删除成功!</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "VToast",
  data () {
    return {
      isSucceed: false
    }
  }
};
</script>

<style lang = "less" scoped>
#back {
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background: #c3c4c6;
  opacity: 0.5;
}
.tipBox {
  border-radius: 10px;
  height: 280px;
  width: 570px;
  background: #ffffff;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  .require {
    padding: 57px 120px;
    p {
      text-align: center;
      font-size: 32px;
    }
  }
  .button {
    height: 100px;
    border-top: 1px solid @mainColor;
    display: flex;
    .cancel,
    .confirm {
      height: 100px;
      width: 50%;
      text-align: center;
      line-height: 100px;
    }
    .cancel {
      border-right: 1px solid @mainColor;
    }
  }
}
.tip {
  border-radius: 10px;
  height: 75px;
  width: 310px;
  background: #9a9a9b;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  p {
    color: #ffffff;
    text-align: center;
    line-height: 75px;
  }
}
</style>
