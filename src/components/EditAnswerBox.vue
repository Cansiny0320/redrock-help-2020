<template>
  <div class="answer-edit-box">
    <VPopup :massage="TipsMassage" v-if="isShowTips" />
    <div class="box">
      <textarea v-model="words" autofocus="autofocus"></textarea>
      <div class="count">共 {{ words.length }} 字</div>
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
    data() {
        return {
            words: '',
            maxLength: 400,
            isShowTips: false,
            TipsMassage: '您最多只能输入 400 个字符',
            timer: null,
        }
    },
    watch: {
        words() {
            this.$store.commit(SET_EDIT_WORDS, this.words)
            if (this.words.length > this.maxLength) {
                this.words = String(this.words).slice(0, this.maxLength);
                this.isShowTips = true

                clearTimeout(this.timer)
                this.timer = setTimeout(() => {
                    this.isShowTips = false
                }, 1500)
            }
        }
    }
};
</script>


<style lang="less" scoped>
.box {
  background: #ffffff;
  border-bottom: 1px solid #e5e5e5;
  textarea {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC,
      Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei,
      sans-serif;
    border: 0;
    outline: 0;
    background: none;
    width: 100%;
    height: 449px;
    box-sizing: border-box;
    font-size: 32px;
    resize: none;
    color: #333;
    padding: 27px 24px 0;
    word-break: break-all;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
  .count {
    padding-right: 24px;
    padding-bottom: 23px;
    text-align: right;
    font-size: 24px;
    color: #969696;
  }
}
</style>
