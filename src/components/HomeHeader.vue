<template>
  <header class="header">
    <div class="item">最热问题</div>
    <div class="item">最新问题</div>
  </header>
</template>

<script>
export default {
  name: 'homeHeader',
  data () {
    return {
      isHot: true,
    }
  },
  watch: {
    $route (to) {
      this.isHot = to.name === 'homeHot' ? true : false
    }
  }
}
</script>

<style lang="less" scoped>
</style>
