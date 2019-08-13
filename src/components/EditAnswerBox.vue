<template>
  <div class="answer-edit-box">
    <VPopup :massage="TipsMassage" v-if="isShowTips"/>
    <div class="box">
      <textarea
        v-model="words"
      ></textarea>
    </div>
  </div>
</template>

<script>
import {
  SET_EDIT_WORDS,
} from '@/store/type/mutations'

import VHotTag from "@/components/VHotTag"
export default {
  name: "answerEditBox",
  data () {
    return {
      words: '',
      maxLength: 130,
      isShowTips: false,
      TipsMassage: '您最多只能输入 130 个字符',
      timer: null,
    }
  },
  watch: {
    words () {
      this.$store.commit(SET_EDIT_WORDS, this.words)
      if (this.words.length > this.maxLength) {
        this.words = String(this.words).slice(0, this.maxLength);
        this.isShowTips = true

        clearTimeout(this.timer)
        this.timer = setTimeout(()=>{
          this.isShowTips = false
        }, 1500)
      }
    }
  }
};
</script>


<style lang="less" scoped>
.box {
  margin: 0 30px;
  border: 1px solid @mainColor;
  border-radius: 30px;
  background: #ffffff;
  textarea {
    border: 0;
    outline: 0;
    width: 650px;
    background: none;
    min-height: 140px;
    padding: 20px;
    font-size: 30px;
  }
}
</style>
