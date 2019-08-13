<template>
  <div>
    <header>
      <VBack />
      <vPublishButton />
    </header>
    <div class="question">{{ oneQuestion.content }}</div>
    <div class="title">问题回答</div>
    <EditAnswerBox />
    <EditImage />

  </div>

</template>

<script>
import { mapGetters } from 'vuex'

import EditAnswerBox from '@/components/EditAnswerBox'
import EditImage from '@/components/EditImage'

export default {
  name: 'answerEdit',
  components: {
    EditAnswerBox,
    EditImage
  },
  computed: {
    ...mapGetters(['oneQuestion'])
  }
}
</script>

<style lang="less" scoped>
header {
  margin: 30px;
  display: flex;
  justify-content: space-between;
}
.question {
  margin: 30px;
  font-size: 32px;
  line-height: 40px;
}
.title {
  margin: 30px 0 20px 30px;
  font-size: 28px;
  color: @fontColor;
}
</style>
