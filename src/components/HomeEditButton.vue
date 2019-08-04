<template>
  <router-link :to="{ name:'questionEdit' }" class="home-edit-button">
    <div class="icon">
      <HomeEditButtonSvg />
    </div>
  </router-link>
</template>

<script>
import HomeEditButtonSvg from '@/assets/svg/HomeEditButton.svg'

export default {
  name: 'homeEditButton',
  components: {
    HomeEditButtonSvg
  }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/button.less';
</style>

