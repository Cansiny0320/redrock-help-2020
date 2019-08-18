<template>
  <div class="v-header">
    <header>
      <VBack />
      <div class="title">{{ titleStr }}</div>
    </header>
    <div class="block"></div>
  </div>
</template>

<script>
export default {
  name: 'vHeader',
  props: {
    titleStr: {
      type: String,
      required: false,
      default: '',
    }
  },
}
</script>

<style lang="less" scoped>
.v-header {
  header {
    z-index: 28;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 30px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid @fontColor;
    background-color: @backgroundColor;
    .title {
      position: fixed;
      left: 0;
      right: 0;
      text-align: center;
    }
  }
  .block {
    height: 100px;
  }
}
</style>

