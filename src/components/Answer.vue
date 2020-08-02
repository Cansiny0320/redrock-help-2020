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
                <div class="action">
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
        background: #ffffff;
        padding: 28px 24px;
        border-bottom: 1px solid @backgroundColor;
        .user {
            display: flex;
            color: @fontColor;
            margin-bottom: 24px;
            .action {
                display: flex;
                font-size: 24px;
                color: @fontColor;
                margin-left: auto;
            }
            &__info {
                .name {
                    font-weight: 800;
                    font-size: 28px;
                    color: #333;
                    margin-bottom: 10px;
                }
                .time {
                    color: #808080;
                    font-size: 22px;
                }
            }
            img {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: @mainColor;
                margin-right: 16px;
            }
        }
        .content {
            margin: 0 0 16px;
            line-height: 36px;
            color: #404040;
            font-size: 28px;
            text-align: justify;
            font-weight: 500;
        }
    }
}
</style>

