<template>
  <div id="app">
      <router-view class="router-box-app"/>
    <TheFooterNavBar />
  </div>
</template>

<script>
import TheFooterNavBar from '@/components/TheFooterNavBar'
export default {
  name: 'home',
  components: {
    TheFooterNavBar,
  }
}
</script>


<style lang="less">
.router-box-app {
  padding-bottom: 88px;
}
</style>
