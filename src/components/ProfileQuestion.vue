<template>
    <div class="profile-question">
        <div class="box" v-for="item of questionData" :key="item.id">
            <div class="fix">
                <div
                    class="content"
                    @click="handelQuestionClick(item.id)"
                    v-text="item.content"
                ></div>
                <div class="tags">
                    <span v-for="item of item.tags.slice(0, 2)" :key="item.id"
                        >#{{ item.name }}#</span
                    >
                </div>
            </div>
            <div class="tips">
                <span class="time">{{ item.createdAt | date }}</span>
                <span class="comment">
                    <i class="icon"></i>{{ item.answersCount }}</span
                >
                <!-- <span class="delete" @click="handelDeleteClick(item.id)"
                    >删除</span
                > -->
                <span
                    class="solve"
                    @click="handelSolveClick(item.id)"
                    v-if="item.status === '未解决' || item.status === '0'"
                    >确认解决</span
                >
                <span
                    class="solved"
                    v-if="item.status === '1' || item.status === '已解决'"
                    >已解决</span
                >
            </div>
        </div>
        <VToast
            v-if="isShowDeleteToast"
            :massage="deleteTipmassage"
            @confirm="handelDeleteConfirm"
            @cancel="handelDeleteCancel"
        />
        <VToast
            v-if="isShowSolveToast"
            :massage="SolveTipmassage"
            @confirm="handelSolveConfirm"
            @cancel="handelSolveCancel"
        />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_DELETE_QUESTION, FETCH_QUESTION_SOLVE } from '../store/type/actions';

export default {
    name: "ProfileQuestion",
    props: {
        questionData: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            isShowDeleteToast: false,
            deleteTipmassage: '你真的想要删除该问题吗？',
            isShowSolveToast: false,
            SolveTipmassage: '设置“已解决”后你的问题将无 法被继续回复,确认设置吗？',
            deleteId: null,
            solveId: null,
        }
    },
    computed: {
        ...mapGetters(['isLoading'])
    },
    methods: {
        handelDeleteClick(questionId) {
            this.isShowDeleteToast = true
            this.deleteTipmassage = '你真的想要删除该问题吗？'
            this.deleteId = questionId
        },
        handelDeleteConfirm() {
            this.$store.dispatch(FETCH_DELETE_QUESTION, this.deleteId)
            this.isShowDeleteToast = false
            this.deleteId = null
        },
        handelDeleteCancel() {
            this.isShowDeleteToast = false
            this.deleteId = null
        },
        handelSolveClick(questionId) {
            this.isShowSolveToast = true
            this.solveId = questionId
        },
        handelSolveConfirm() {
            this.$store.dispatch(FETCH_QUESTION_SOLVE, this.solveId)
            this.isShowSolveToast = false
            this.solveId = null
        },
        handelSolveCancel() {
            this.isShowSolveToast = false
            this.solveId = null
        },
        handelQuestionClick(questionId) {
            this.$router.push({ name: 'question', query: { id: questionId } })
        },
    },
}
</script>

<style lang="less" scoped>
.box {
    background: #ffffff;
    margin: 20px 24px;
    padding: 28px 24px;
    border-radius: 10px;
    .fix {
        margin-bottom: 31px;
        .content {
            margin-bottom: 15px;
            font-size: 32px;
            color: @fontColor;
            @nowrap();
        }
        .tags {
            font-size: 26px;
            color: @mainColor;
            span {
                margin-right: 10px;
            }
        }
    }
    .tips {
        display: flex;
        align-items: center;
        span {
            color: #808080;
            font-size: 22px;
            &.comment {
                display: flex;
                margin-left: 48px;
                align-items: center;
                .icon {
                    display: block;
                    width: 19px;
                    height: 19px;
                    background-image: url('../assets/images/comment.png');
                    background-repeat: no-repeat;
                    margin-right: 9px;
                    background-size: 100% 100%;
                }
            }
        }
        .solve {
            margin-left: auto;
            font-size: 24px;
            color: @mainColor;
            border: 1px solid @mainColor;
            border-radius: 300px;
            padding: 13px 24px;
        }
        .solved {
            font-size: 24px;
            color: #808080;
            margin-left: auto;
            padding: 13px 0px;
        }
    }
}
</style>
