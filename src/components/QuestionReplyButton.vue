<template>
  <router-link :to="{ name:'answserEdit' }" class="question-reply-button">
    <div class="icon">
      <QuestionReplyButtonSvg />
    </div>
  </router-link>
</template>

<script>
import QuestionReplyButtonSvg from '@/assets/svg/QuestionReplyButton.svg'

export default {
  name: 'questionReplyButton',
  components: {
    QuestionReplyButtonSvg
  }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/button.less';
</style>

