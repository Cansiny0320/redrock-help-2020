<template>
  <header class="home-header">
    <router-link
      class="item"
      :class="{ active: isHot }"
      :to="{ name: 'homeHot' }"
    >最热问题</router-link>
    <router-link
      class="item"
      :class="{ active: !isHot }"
      :to="{ name: 'homeNew' }"
    >最新问题</router-link>
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
.home-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  font-size: 28px;
  line-height: 70px;
  display: flex;
  justify-content: space-around;
  color: #cdcdcf;
  background-color: @backgroundColor;
  border-bottom: 1px solid @borderColor;
  box-sizing: border-box;
  .active {
    border-bottom: 4px solid @mainColor;
    color: @mainColor;
  }
}
</style>
