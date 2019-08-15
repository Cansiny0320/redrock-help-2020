<template>

  <div></div>

</template>

<script>
export default {
  name: 'vLoading',
  props: {
    number: {
      type: Number,
      required: false,
      default: 4,
    }
  },
  data () {
    return {
      array: Array(this.number)
    }
  }
}
</script>

<style lang="less" scoped>
</style>