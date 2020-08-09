<template>
    <div
        class="profile-comment no-footer"
        :class="{ noContent: !profileComment.length }"
    >
        <VHeader titleStr="我收到的评论" />
        <VLoading v-if="isLoading" />
        <div class="img" v-else-if="!profileComment.length">
            <img src="../assets/images/comments.png" />
            <div class="tip">稍安勿躁，学长学姐在冲啦~</div>
        </div>
        <ProfileComment v-else :commentData="profileComment" />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_PROFILE_COMMENT } from "@/store/type/actions";

import ProfileComment from '@/components/profileComment'

export default {
    name: "profileComment",
    data() {
        return {

        }
    },
    components: {
        ProfileComment,
    },
    beforeRouteEnter(_, from, next) {
        next(vm => {
            if (from.name !== 'question') {
                vm.$store.dispatch(FETCH_PROFILE_COMMENT);

            }
        })
    },
    computed: {
        ...mapGetters(["isLoading", "profileComment"]),
    }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/nofooter.less';
.profile-comment {
    background-color: #fff;
    width: 100%;
    .img {
        height: calc(100vh - 198px);
        background-color: #fff;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
            width: 349px;
            margin-top: 300px;
        }
        .tip {
            color: #60606d;
            margin-top: 70px;
            font-size: 32px;
        }
    }
}
</style>