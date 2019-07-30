<template>
  <div
    class="v-back"
    v-if="isShowBack"
    @click="handelBackClick"
  >
    <BaseBackSvg />
  </div>
</template>

<script>
import BaseBackSvg from '@/assets/svg/BaseBack.svg'

export default {
  name: 'vBack',
  props: {
    isShowBack: {
      type: Boolean,
      required: true,
    }
  },
  components: {
    BaseBackSvg,
  },
  methods: {
    handelBackClick () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
  }
}
</script>

<style lang="less" scoped>
.v-back {
    display: flex;
    align-items: center;
    padding-right: 20px;
    svg {
      width: 38px;
      height: 38px;
      path {
        fill: @mainColor;
      }
    }
  }
</style>
