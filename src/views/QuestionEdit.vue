<template>
  <div>
   <header class="header">
      <VBack :isShowBack="true" />
      <QuestionPublishButton />
   </header>
   <QuestionEditBox/>
   <QuestionEditPhoto/>
   
   
  </div>
  
</template>

<script>
import VBack from '@/components/VBack'
import QuestionPublishButton from '@/components/QuestionPublishButton'
import QuestionEditBox from '@/components/QuestionEditBox'
import QuestionEditPhoto from '@/components/QuestionEditPhoto'

export default {
  name: 'questionEdit',
  components:{
    QuestionPublishButton,
    VBack,
    QuestionEditBox,
    QuestionEditPhoto

  
  }
}
</script>

<style lang="less" scoped>
 .header{
  margin: 30px;
  display: flex;
 }

</style>

