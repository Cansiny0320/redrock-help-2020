<template>
  <header class="v-header">
    <VBack />
    <div class="title">{{ titleStr }}</div>
  </header>
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
  margin: 30px;
  display: flex;
  align-items: center;
}
</style>

