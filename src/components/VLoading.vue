<template>
  <div class="v-loading"> 
    <ImageLoadingSvg />
  </div>
</template>

<script>
import ImageLoadingSvg from '@/assets/svg/ImageLoading.svg'
export default {
  name: 'vLoading',
  components: {
    ImageLoadingSvg,
  }
}
</script>

<style lang="less" scoped>
.v-loading {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>