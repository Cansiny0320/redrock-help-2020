<template>
  <div id="app">
    <keep-alive include="home,search,profile">
      <router-view />
    </keep-alive>
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
</style>
