<template>
    <div class="profile-question">
        <VHeader titleStr="我提过的问题" />
        <VLoading v-if="isLoading" />
        <div class="img" v-else-if="!profileQuestion.length">
            <img src="../assets/images/question.png" />
            <div class="tip">这里静悄悄，期待你的躁动~</div>
        </div>
        <ProfileQuestion v-else :questionData="profileQuestion" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_PROFILE_QUESTION } from '@/store/type/actions'

import ProfileQuestion from '@/components/ProfileQuestion'

export default {
    name: "profileQuestion",
    components: {
        ProfileQuestion,
    },
    beforeRouteEnter(_, from, next) {
        next(vm => {
            if (from.name !== 'question') {
                vm.$store.dispatch(FETCH_PROFILE_QUESTION)
            }
        })
    },
    computed: {
        ...mapGetters(['isLoading', 'profileQuestion']),
    },
}
</script>

<style lang="less" scoped>
.profile-question {
    background-color: @backgroundColor;
    width: 100%;
    height: calc(100vh - 98px);
    .img {
        height: calc(100vh - 198px);
        background-color: #fff;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
            width: 453px;
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
