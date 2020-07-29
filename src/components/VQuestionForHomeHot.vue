<template>
    <div class="v-question-home" v-if="!isLoading">
        <div class="no-content" v-if="isNoContent">
            空空如也，快来提一个问题
        </div>
        <div
            class="question"
            v-for="item of questionData"
            :key="item.id"
            @click="handelQuestionBoxClick(item.id)"
        >
            <div class="content" v-text="item.content"></div>
            <div class="user">
                <img class="img" :src="item.author.avatar | https" />
                <span class="name">{{ item.author.name }}</span>
            </div>
            <div class="anwser" v-text="item.content"></div>
            <div class="info">
                <span class="tag" v-for="tag of item.tags" :key="tag.id"
                    >#{{ tag.name }}#</span
                >
                <div class="count">{{ item.author.answersCount }}人回答</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_NEXT_QUESTIONS } from '../store/type/actions';

export default {
    name: 'vQuestionForHomeHot',
    props: {
        questionData: {
            type: Array,
            required: true,
        }
    },
    computed: {
        ...mapGetters(['isLoading']),
        isNoContent() {
            return this.questionData.length === 0
        }
    },
    methods: {
        handelQuestionBoxClick(id) {
            this.$router.push({ name: 'question', query: { id } })
        },
    },
}

</script>

<style lang="less" scoped>
.v-question-home {
    // 这种有具体内容最好不要设定 height 和 width
    margin: 0 28px;
    .no-content {
        text-align: center;
        color: @fontColor;
    }
    .question {
        margin-bottom: 32px;
        border-radius: 8px;
        background: #ffffff;
        color: #222;
        padding-bottom: 28px;
        border-radius: 12px;
        padding: 28px 24px;
        .user {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            color: #555;
            margin-top: 24px;
            .img {
                width: 40px;
                height: 40px;
                border-radius: 100%;
                background: @mainColor;
                margin-right: 18px;
            }
            .name {
                font-size: 24px;
            }
        }
        .content {
            line-height: 120%;
            font-size: 32px;
            @ellisis-2();
        }
        .anwser {
            @ellisis-2();
            font-size: 28px;
            line-height: 120%;
            margin: 24px 0 20px;
        }
        .info {
            color: #c7c7c7 !important;
            display: flex;
            font-size: 28px;
            color: @fontColor;
            line-height: 40px;
            .tag {
                margin-right: 10px;
                font-size: 26px;
                color: @mainColor;
            }
            .count {
                margin-left: auto;
                font-size: 24px;
                color: #808080;
            }
        }
    }
}
</style>