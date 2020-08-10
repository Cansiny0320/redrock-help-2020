<template>
  <div class="tip">
    <p>{{ massage }}</p>
  </div>
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
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  left: 50%;
  // right: 50%;
  top: 75%;
  transform: translate(-50%, -50%);
  z-index: 2;
  p {
    font-size: 24px;
    padding: 24px 52px;
    color: #ffffff;
    white-space: nowrap;
  }
}
</style>
