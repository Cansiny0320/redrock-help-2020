<template>
    <div class="qustion">
        <VHeader />
        <VLoading v-if="isLoading" />
        <template v-else>
            <div class="top">
                <div class="content" v-text="oneQuestion.content"></div>
                <div class="user">
                    <img :src="oneQuestion.author.avatar | https" />
                    <span class="name">{{ oneQuestion.author.name }}</span>
                    <span class="count">
                        {{ oneQuestion.answersCount }}人回答</span
                    >
                    <span
                        class="status"
                        :class="{ active: isStautsActive }"
                        @click="toAnswserEdit(oneQuestion.status)"
                        >{{
                            oneQuestion.status === '已解决'
                                ? '已解决'
                                : '去回答'
                        }}</span
                    >
                </div>
            </div>
            <Answer :answersData="oneQuestion.answer" class="answer" />
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_ONE_QUESTION_BY_ID } from '@/store/type/actions'

import QuestionReplyButton from '@/components/QuestionReplyButton'
import Answer from '@/components/Answer'

export default {
    name: 'qustion',
    components: {
        QuestionReplyButton,
        Answer,
    },
    mounted() {
        this.$store.dispatch(FETCH_ONE_QUESTION_BY_ID, this.$route.query.id)
    },
    computed: {
        ...mapGetters(['oneQuestion', 'isLoading']),
        isShowQuestionReplyButton() {
            let markAnswerCount = 0
            this.oneQuestion.answer.map(item => {
                if (String(item.author.stuNum) === String(localStorage.getItem('stuNum'))) {
                    markAnswerCount++
                }
            })
            return this.oneQuestion.answer.length < 30
                && this.oneQuestion.status === '未解决'
                && parseInt(localStorage.getItem('role')) === 0
                && markAnswerCount === 0
        },
        isStautsActive() {
            return this.oneQuestion.status === '已解决'
        }
    },
    methods: {
        toAnswserEdit(status) {
            this.isShowQuestionReplyButton && this.$router.push({
                name: 'answserEdit',
            })
        }
    }
}
</script>

<style lang="less" scoped>
.qustion {
    background-color: @backgroundColor;
}
.user {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: @fontColor;
    .name {
        font-size: 24px;
        color: @fontLightColor;
        margin-right: 22px;
    }
    img {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background: @mainColor;
        margin-right: 8px;
    }
    .count {
        font-size: 24px;
        color: #808080;
    }
    .status {
        font-size: 28px;
        margin: 0 30px 0 auto;
        color: @mainColor;
        &.active {
            color: #808080;
        }
    }
}
.top {
    background-color: #fff;
    padding: 28px 24px 23px 14px;
    .content {
        word-wrap: break-word;
        font-size: 32px;
        color: @fontColor;
        line-height: 1.406;
        margin-bottom: 23px;
    }
}

.images {
    padding: 0 30px 30px 30px;
}
.answer {
    margin-top: 11px;
}
</style>


