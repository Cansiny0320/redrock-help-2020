<template>
    <div class="question-edit-box">
        <VPopup :massage="TipsMassage" v-if="isShowTips" />
        <div class="box">
            <textarea
                v-model="words"
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
    border-top: 1px solid #555;
    border-bottom: 1px solid #555;
    height: 384px;
    background: #ffffff;
    textarea {
        border: 0;
        outline: 0;
        width: 650px;
        background: none;
        min-height: 150px;
        height: 80%;
        padding: 20px 20px 0 20px;
        font-size: 32px;
    }
    .count {
        font-size: 24px;
        color: #808080;
        padding-right: 24px;
        text-align: right;
    }
}
</style>
