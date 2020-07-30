<template>
    <div class="v-answer-action">
        <div
            class="item"
            :class="{ active: item.isApproval }"
            @click="handelApprovalClick(item.id)"
        >
            {{ item.approvalNum }}
            <AnswerApprovalSvg />
        </div>
        <VPopup v-if="isShowPopup" :massage="approvalOpposeTipsMassage" />
    </div>
</template>

<script>
import {
    FETCH_ANSWER_APPROVAL,
} from '@/store/type/actions'

import AnswerApprovalSvg from '@/assets/svg/AnswerApproval.svg'

export default {
    name: 'answerAction',
    props: {
        item: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            isShowPopup: false,
            approvalOpposeTipsMassage: '',
            timer: null,
        }
    },
    components: {
        AnswerApprovalSvg,
    },
    methods: {
        handelApprovalClick(answerId) {
            
            this.$store.dispatch(FETCH_ANSWER_APPROVAL, answerId)
        },
        autoHidePopup() {
            this.isShowPopup = true
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.isShowPopup = false
            }, 1500)
        }
    }
}
</script>

<style lang="less" scoped>
.v-answer-action {
    display: flex;
    align-items: center;
    color: @fontColor;
    margin-right: 10px;
    .item {
        display: flex;
        align-items: center;
        margin-left: 47px;
        svg {
            margin: 0 4px;
            height: 30px;
            width: 30px;
        }
        fill: @fontColor;
        &.active {
            fill: @mainColor;
            color: @mainColor;
        }
    }
}
</style>


