<template>
  <div class="home">
    <HomeHeader />
    <router-view class="router-box"/>
    <HomeEditButton />
  </div>

</template>

<script>
import HomeEditButton from '@/components/HomeEditButton'
import HomeHeader from '@/components/HomeHeader'
export default {
  name: 'home',
  components: {
    HomeEditButton,
    HomeHeader
  }
}
</script>

<style lang="less" scoped>
.router-box {
  padding-top: 70px;
}
</style>
