<template>
  <div>
   <header class="header">
      <VBack :isShowBack="true" />
      <QuestionPublishButton />
   </header>
   <QuestionEditBox/>
   <PhotoAdd/>
  </div>
  
</template>

<script>
import VBack from '@/components/VBack'
import QuestionPublishButton from '@/components/QuestionPublishButton'
import QuestionEditBox from '@/components/QuestionEditBox'
import PhotoAdd from '@/components/PhotoAdd'
export default {
  name: 'questionEdit',
  components:{
    QuestionPublishButton,
    VBack,
    QuestionEditBox,
    PhotoAdd
  }
}
</script>

<style lang="less" scoped>
 .header{
  margin: 30px;
  display: flex;
 }

</style>

