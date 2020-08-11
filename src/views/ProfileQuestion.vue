<template>
  <div
    class="profile-question no-footer"
    :class="{ noContent: !profileQuestion.length }"
  >
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
@import '../assets/styles/nofooter.less';

.profile-question {
  &.noContent {
    background-color: #fff;
  }
  background-color: @backgroundColor;
  width: 100%;
  .img {
    height: calc(100vh - 198px);
    background-color: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 453px;
      margin-top: 176px;
    }
    .tip {
      position: absolute;
      top: 512px;
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
      color: #60606d;
      font-size: 32px;
    }
  }
}
</style>
