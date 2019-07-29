<template>
  <div id="app">
      <router-view />
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
