<template>
    <div class="v-answer-action">
        <div
            class="item"
            :class="{ active: isApproval(item.isApproval) }"
            @click="handelApprovalClick(item.id)"
        >
            <div class="num">{{ item.approvalNum }}</div>
            <div
                class="like"
                :class="{ active: isApproval(item.isApproval) }"
            ></div>
        </div>
        <VPopup v-if="isShowPopup" :massage="approvalOpposeTipsMassage" />
    </div>
</template>

<script>
import {
    FETCH_ANSWER_APPROVAL,
} from '@/store/type/actions'



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
    methods: {
        handelApprovalClick(answerId) {
            this.$store.dispatch(FETCH_ANSWER_APPROVAL, answerId)
        },
        autoHidePopup() {
            const showTime = 1500
            this.isShowPopup = true
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.isShowPopup = false
            }, showTime)
        },
        // 传入的false/true 是字符串
        isApproval(str) {
            return JSON.parse(str)
        }
    }
}
</script>

<style lang="less" scoped>
.v-answer-action {
    .item {
        height: 60px;
        display: flex;
        align-items: center;
        color: #808080;
        font-size: 24px;
        &.active {
            color: @mainColor;
        }
        .num {
            height: 19px;
            line-height: 1;
        }
        .like {
            width: 24px;
            height: 24px;
            background-image: url('../assets/images/like.png');
            background-repeat: no-repeat;
            background-size: contain;
            margin-left: 5px;
            line-height: 20px;
            &.active {
                background-image: url('../assets/images/likeActive.png');
            }
        }
    }
}
</style>


