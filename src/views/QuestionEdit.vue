<template>
  <div>
    <header class="header">
      <VBack />
      <vPublishButton />
    </header>
    <QuestionEditBox />
    <QuestionEditPhoto />

  </div>

</template>

<script>
import QuestionEditBox from '@/components/QuestionEditBox'
import QuestionEditPhoto from '@/components/QuestionEditPhoto'

export default {
  name: 'questionEdit',
  components: {
    QuestionEditBox,
    QuestionEditPhoto
  }
}
</script>

<style lang="less" scoped>
.header {
  margin: 30px;
  display: flex;
  justify-content: space-between;
}
</style>

