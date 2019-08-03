<template>
  <div
    @touchstart.prevent
    class="v-mask"
  >
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
.v-mask {
  z-index: 10000;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(195, 196, 198, 0.5);
}
</style>

