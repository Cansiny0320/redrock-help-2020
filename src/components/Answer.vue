<template>
    <div class="v-answer">
        <div class="no-content" v-if="isNoContent">空空如也，快来回答一个</div>
        <div v-for="item of answersData" :key="item.id" class="answer">
            <div class="user">
                <img :src="item.author.avatar | https" />
                <div class="user__info">
                    <div class="name">{{ item.author.name }}</div>
                    <div class="time">{{ item.createdAt | date }}</div>
                </div>
                <div class="info">
                    <AnswerAction :item="item" />
                </div>
            </div>
            <div class="content" v-text="item.content"></div>
            <div class="images">
                <VImageForAnswer :imagesUrl="item.photoUrls" />
            </div>
        </div>
    </div>
</template>

<script>
import AnswerAction from '@/components/AnswerAction'

export default {
    name: 'answer',
    props: {
        answersData: {
            type: Array,
            required: true,
        }
    },
    components: {
        AnswerAction,
    },
    computed: {
        isNoContent() {
            return this.answersData.length === 0
        }
    },
    methods: {
        handelOpposeClick(answerId, isApproval) {
            if (!isApproval) this.$store.dispatch(FETCH_ANSWER_OPPOSE, answerId)
        }
    }
}
</script>

<style lang="less" scoped>
.v-answer {
    .no-content {
        text-align: center;
        color: @fontColor;
    }
    .answer {
        border-radius: 8px;
        background: #ffffff;
        padding: 28px 24px;
        .user {
            display: flex;
            justify-content: flex-start;
            color: @fontColor;
            margin-bottom: 24px;
            .info {
                display: flex;
                font-size: 24px;
                line-height: 30px;
                color: @fontColor;
                margin-left: auto;
                .action {
                    display: flex;
                    align-items: center;
                    color: @fontColor;
                    div {
                        display: flex;
                        align-items: center;
                        margin: 0 10px;
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
            }
            &__info {
                .time {
                    color: #808080;
                    font-size: 22px;
                }
                .name {
                    font-size: 28px;
                    color: #333;
                    margin-bottom: 10px;
                }
            }
            img {
                width: 60px;
                height: 60px;
                border-radius: 100%;
                background: @mainColor;
                margin-right: 16px;
            }
        }
        .content {
            padding: 0 0 16px;
            line-height: 1.286;
            color: #404040;
            font-size: 28px;
            text-align: justify;
        }
    }
}
</style>

