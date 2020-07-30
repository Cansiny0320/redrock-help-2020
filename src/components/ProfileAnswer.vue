<template>
    <div v-if="!isLoading">
        <div
            class="box"
            v-for="item in commentData"
            :key="item.ansId"
            @click="handelQuestionClick(item.question.queId)"
        >
            <div class="question">{{ item.question.content }}</div>
            <div class="comment">{{ item.content }}</div>

            <div class="info">
                <div class="time">{{ item.createdAt | date }}</div>
                <div class="v-answer-action">
                    <div class="item">
                        <AnswerApprovalSvg />
                        {{ item.approvalNum }}
                    </div>
                </div>
                <div class="delete" @click.stop="handelDeleteClick(item.ansId)">
                    删除
                </div>
            </div>
        </div>
        <VToast
            v-show="isShowToast"
            :massage="deleteTipmassage"
            @confirm="handelDeleteConfirm"
            @cancel="handelDeleteCancel"
        />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_PROFILE_COMMENT, FETCH_DELETE_ANSWER } from "@/store/type/actions";

import AnswerAction from '@/components/AnswerAction'
import AnswerApprovalSvg from '@/assets/svg/AnswerApproval.svg'
export default {
    name: "profileAnswer",
    components: {
        AnswerAction, AnswerApprovalSvg
    },
    data() {
        return {
            isShowToast: false,
            deleteTipmassage: '',
            deleteId: null,
        }
    },
    props: {
        commentData: {
            type: Array,
            required: true,
        }
    },
    computed: {
        ...mapGetters(['isLoading'])
    },
    methods: {
        handelDeleteClick(answerId) {
            this.isShowToast = true
            this.deleteTipmassage = '删除后不可恢复，确认删除吗？'
            this.deleteId = answerId
        },
        handelDeleteConfirm() {
            this.$store.dispatch(FETCH_DELETE_ANSWER, this.deleteId)
            this.isShowToast = false
            this.deleteTipmassage = ''
        },
        handelDeleteCancel() {
            this.isShowToast = false
            this.deleteTipmassage = ''
        },
        handelQuestionClick(questionId) {
            this.$router.push({ name: 'question', query: { id: questionId } })
        },
    }
};
</script>



<style lang="less" scoped>
.box {
    background: #ffffff;
    margin: 30px;
    padding: 30px 24px 28px 25px;
    border-radius: 10px;
    .comment {
        font-size: 28px;
        margin-bottom: 20px;
        color: #404040;
    }
    .question {
        @nowrap();
        color: @fontColor;
        font-size: 32px;
        margin-bottom: 30px;
        font-weight: bold;
        line-height: 120%;
    }
    .info {
        display: flex;
        align-items: center;
        font-size: 22px;
        line-height: 30px;
        color: #808080;
        .action {
            margin: 0 30px 0 auto;
        }
        .delete {
            margin-left: auto;
            font-size: 24px;
            color: @mainColor;
            border: 1px solid @mainColor;
            padding: 14px 25px;
            border-radius: 80px;
        }
        .v-answer-action {
            display: flex;
            align-items: center;
            margin-right: 10px;
            .item {
                display: flex;
                align-items: center;
                margin-left: 56px;
                svg {
                    margin: 0 4px;
                    height: 30px;
                    width: 30px;
                }
                fill: #808080;
                &.active {
                    fill: @mainColor;
                    color: @mainColor;
                }
            }
        }
    }
}
</style>
