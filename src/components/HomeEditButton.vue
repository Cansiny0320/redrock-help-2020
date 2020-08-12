<template>
  <router-link :to="{ name: 'questionEdit' }" class="home-edit-button">
    <div class="icon">
      <PenSvg />
    </div>
  </router-link>
</template>

<script>
import PenSvg from '@/assets/svg/mybi.svg'

export default {
    name: 'homeEditButton',
    components: { PenSvg }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/button.less';
</style>

