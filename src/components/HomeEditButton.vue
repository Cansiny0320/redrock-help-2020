<template>
  <router-link :to="{ name:'questionEdit' }" class="box">
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
.box {
  position: fixed;
  right: 23px;
  bottom: 128px;
  height: 101px;
  width: 101px;
  background-color: #ff9680;
  border-radius: 101px;
  box-shadow: 3px 3px 7px rgba(255, 139, 117, 0.29);

  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    width: 41px;
    height: 47px;
    path {
      fill: #ffffff;
    }
  }
}
</style>

