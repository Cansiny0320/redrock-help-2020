<template>
  <div
    class="profile-answer no-footer"
    :class="{ noContent: !profileAnswer.length }"
  >
    <VHeader titleStr="我的回答" />
    <VLoading v-if="isLoading" />
    <div class="img" v-else-if="!profileAnswer.length">
      <img src="../assets/images/answer.png" />
      <div class="tip">学弟学妹们都等着急了~</div>
    </div>
    <ProfileAnswer v-else :commentData="profileAnswer" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_PROFILE_ANSWER } from "@/store/type/actions";

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

    beforeRouteEnter(_, from, next) {
        next(vm => {
            if (from.name !== 'question') {
                vm.$store.dispatch(FETCH_PROFILE_ANSWER)
            }
        })
    },
    computed: {
        ...mapGetters(["isLoading", "profileAnswer"]),
    }
};
</script>

<style lang="less" scoped>
@import '../assets/styles/nofooter.less';

.profile-answer {
  &.noContent {
    background-color: #fff;
  }
  background-color: @backgroundColor;
  width: 100%;
  .img {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 511px;
      margin-top: 177px;
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
