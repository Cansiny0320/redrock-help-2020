<template>
  <VMask v-if="toastIsShow">
    <div class="tipBox">
      <div class="require">
        <p>{{ maskMassage }}</p>
      </div>
      <div class="button">
        <p class="cancel">取消</p>
        <p class="confirm">确认</p>
      </div>
    </div>
  </VMask>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "VToast",
  data () {
    return {
      isSucceed: false
    }
  },
  computed: {
    ...mapGetters(['toastIsShow', 'toastMassage'])
  }
};
</script>

<style lang="less" scoped>
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
