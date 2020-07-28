<template>
    <div class="home-new">
        <div class="question">
            <VLoading v-if="isLoading" />
            <VQuestionForHomeNew
                :isLoading="isLoading"
                :questionData="questionList"
            />
            <VLoading v-if="isLoadingMore" />
            <div class="no-more" v-if="questionListNoMore">没有更多了</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_QUESTION_NEW, FETCH_NEXT_NEW_QUESTION } from '@/store/type/actions'
import fecthMore from '@/mixin/fectchMore'

export default {
    name: 'homeNew',
    mixins: [fecthMore],
    beforeRouteEnter(_, from, next) {
        next(vm => {
            if (from.name !== 'question') {
                vm.$store.dispatch(FETCH_QUESTION_NEW)
            }
        })
    },
    computed: {
        ...mapGetters(['isLoading', 'questionList', 'questionListNoMore', 'isLoadingMore']),
    },
    methods: {
        handelFecthMore() {
            this.$store.dispatch(FETCH_NEXT_NEW_QUESTION)
        }
    }
}
</script>

<style lang="less" scoped>
.question {
    margin-top: 30px;
}
.no-more {
    text-align: center;
    padding: 0 30px 30px 30px;
}
</style>

