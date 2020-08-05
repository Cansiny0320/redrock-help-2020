<template>
    <div class="home-tag">
        <HomeHeader />
        <HomeHotTag />
        <div class="question">
            <VLoading v-if="isLoading" />
            <VQuestionForHomeHot :questionData="questionList" />
            <VLoading v-if="isLoadingMore" />
            <div class="no-more" v-if="questionListNoMore">没有更多了</div>
        </div>
        <HomeEditButton v-if="isShowHomeEditButton" />
    </div>
</template>

<script>
import { mapGetters } from "vuex"

import { FETCH_QUESTION_BY_TAG, FETCH_NEXT_TAG_QUESTION } from '@/store/type/actions'

import HomeEditButton from '@/components/HomeEditButton'
import HomeHotTag from '@/components/HomeHotTag'
import HomeHeader from '@/components/HomeHeader'
import fetchMore from '@/mixin/fectchMore'

export default {
    name: 'homeTag',
    mixins: [fetchMore],
    components: {
        HomeEditButton, HomeHotTag, HomeHeader
    },
    computed: {
        ...mapGetters(['tagHot', 'isLoading', 'questionList', 'questionListNoMore', 'isLoadingMore']),
        isShowHomeEditButton() {
            return parseInt(localStorage.getItem('role')) === 1
        },
    },

    watch: {
        '$route'(to, from) {
            this.$store.dispatch(FETCH_QUESTION_BY_TAG, this.$route.query.id)
        }
    },
    beforeRouteEnter(_, from, next) {
        next(vm => {
            if (from.name !== 'question') {
                vm.$store.dispatch(FETCH_QUESTION_BY_TAG, vm.$route.query.id)
            }
        })
    },
    methods: {
        handelFecthMore() {
            this.$store.dispatch(FETCH_NEXT_TAG_QUESTION, this.$route.query.id)
        }
    }
}
</script>

<style lang="less" scoped>
.home-tag {
    margin-top: 165px;
    background-color: @backgroundColor;
    background-color: @backgroundColor;
    min-height: calc(100vh - 263px);
}
.question {
    padding-top: 19px;
}
.no-more {
    text-align: center;
    padding: 0 30px 30px 30px;
}
</style>