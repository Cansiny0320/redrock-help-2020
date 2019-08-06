<template>
  <div>
    <header class="header">
      <VBack />
      <vPublishButton />
    </header>
    <EditBox />
    <EditImage />
  </div>

</template>

<script>
import EditBox from '@/components/EditBox'
import EditImage from '@/components/EditImage'

export default {
  name: 'questionEdit',
  components: {
    EditBox,
    EditImage
  },
  data() {
    return {
      words: '',
      urlList: [],
    }
  },
}
</script>

<style lang="less" scoped>
.header {
  margin: 30px;
  display: flex;
  justify-content: space-between;
}
</style>

