<template>
  <div class="question-edit-box">
    <VPopup :massage="TipsMassage" v-if="isShowTips" />
    <div class="box">
      <textarea
        v-model.trim="words"
        autofocus="autofocus"
        placeholder="输入你的问题吧!(最多输入300字)"
      ></textarea>
      <div class="count">共 {{ words.length }} 字</div>
    </div>
    <EditTag />
  </div>
</template>

<script>
import {
    SET_EDIT_WORDS,
} from '@/store/type/mutations'

import VHotTag from "@/components/VHotTag"
import EditTag from '@/components/EditTag'

export default {
    name: "questionEditBox",
    components: {
        EditTag
    },
    data() {
        return {
            words: '',
            maxLength: 300,
            isShowTips: false,
            TipsMassage: '您最多只能输入 300 个字符',
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
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  background: #ffffff;
  textarea {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC,
      Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei,
      sans-serif;
    border: 0;
    outline: 0;
    width: 100%;
    box-sizing: border-box;
    background: none;
    height: 445px;
    padding: 27px 24px 0 23px;
    font-size: 32px;
    resize: none;
    &::placeholder {
      color: #808080;
      font-size: 32px;
      font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue,
        PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC,
        WenQuanYi Micro Hei, sans-serif;
    }
    &::-webkit-scrollbar {
      width: 0;
    }
  }
  .count {
    font-size: 24px;
    color: #969696;
    padding-right: 24px;
    padding-bottom: 23px;
    text-align: right;
  }
}
</style>
