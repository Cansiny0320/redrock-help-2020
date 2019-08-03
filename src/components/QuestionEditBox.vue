<template>
  <div>
    <div class="box">
      <textarea class="content"></textarea>
      <QuestionEditTag/>
    </div>
  </div>
</template>

<script>
import VHotTag from "@/components/VHotTag"
import QuestionEditTag from '@/components/QuestionEditTag'
export default {
  name: "QuestionEditBox",
  components: {
   QuestionEditTag
    }
};
</script>


<style lang="less" scoped>
.box {
  margin: 0 30px;
  border: 1px solid @mainColor;
  height: 380px;
  border-radius: 30px;
  background: #ffffff;
  .content {
    border: 0;
    outline: 0;
    width: 650px;
    background: none;
    min-height: 110px;
    overflow: hidden;
    padding: 25px;
  }
}
</style>
