<template>
  <div>
    <div class="box">
      <textarea 
      class="content"
      max-length = "150"
      v-model ="words" 
      ></textarea>
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
    },
  data(){
    return{
    words:'',
    maxLength:150
    }
  } , 
   watch: {
        words() {
            console.log(this.words.length)
            if (this.words.length > this.maxLength) {
                this.words = String(this.words).slice(0, this.maxLength);
            }
        }
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
