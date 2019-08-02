<template>
  <div @touchstart.prevent class="v-toast">
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

<style lang="less" scoped>
#back {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: #c3c4c6;
  opacity: 0.5;
}
.tipBox {
  border-radius: 10px;
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
      line-height: 44px;
    }
  }
  .button {
    border-top: 1px solid @mainColor;
    box-sizing: border-box;
    display: flex;
    .cancel,
    .confirm {
      width: 50%;
      text-align: center;
      padding: 30px 0;
    }
    .cancel {
      box-sizing: border-box;
      border-right: 1px solid @mainColor;
    }
    .confirm {
      color: @mainColor;
    }
  }
}
</style>
