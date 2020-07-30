<template>
    <div class="profile-answer">
        <VHeader :titleStr="titleStr" />
        <VLoading v-if="isLoading" />
        <div class="img" v-else-if="!profileAnswer.length">
            <img
                src="../assets/images/approval.png"
                v-if="paramsResult === 'approval'"
            />
            <div class="tip">{{ tip }}</div>
        </div>
        <ProfileAnswer v-else :commentData="profileAnswer" />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_PROFILE_ANSWER, FETCH_PROFILE_APPROVAL } from "@/store/type/actions";

import ProfileAnswer from '@/components/ProfileAnswer'

export default {
    name: "profileAnswer",
    data() {
        return {
            paramsResult: ""
        }
    },
    components: {
        ProfileAnswer,
    },
    created() {
        console.log(this.profileAnswer.length);
    },
    beforeRouteEnter(_, from, next) {
        next(vm => {
            if (from.name !== 'question') {
                vm.paramsResult = vm.$route.query.type
                if (vm.paramsResult === 'approval') {
                    vm.$store.dispatch(FETCH_PROFILE_APPROVAL);
                } else {
                    vm.$store.dispatch(FETCH_PROFILE_ANSWER)
                }
            }
        })
    },
    computed: {
        ...mapGetters(["isLoading", "profileAnswer"]),
        titleStr() {
            switch (this.paramsResult) {
                case "comment":
                    return "我收到的评论"
                    break;
                case "answers":
                    return "我的回答"
                    break;
                case "approval":
                    return "我收到的赞同"
                    break;
                default:
                    return ""
            }
        },
        tip() {
            switch (this.paramsResult) {
                case "approval":
                    return '知音在路上啦~'
                    break;
                case "answers":
                    return "学弟学妹们都等着急了"
                    break;
                default:
                    return ''
            }
        }
    }
};
</script>

<style lang="less" scoped>
.profile-answer {
    background-color: @backgroundColor;
    height: calc(100vh - 98px);
    width: 100%;
    .img {
        height: calc(100vh - 100px);
        background-color: #fff;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
            width: 509px;
            height: 286px;
            margin-top: 300px;
        }
        .tip {
            color: #60606c;
            margin-top: 70px;
        }
    }
}
</style>
