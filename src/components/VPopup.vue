<template>
  <VMask>
    <div class="tip">
      <p>{{ massage }}</p>
    </div>
  </VMask>
</template>

<script>
export default {
  name: "vPopup",
  props: {
    massage: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.tip {
  border-radius: 10px;
  background: #9a9a9b;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  p {
    padding: 30px;
    color: #ffffff;
    text-align: center;
    line-height: 40px;
  }
}
</style>
