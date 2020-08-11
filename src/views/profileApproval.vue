<template>
  <div
    class="profile-approval no-footer"
    :class="{ noContent: !profileApproval.length }"
  >
    <VHeader titleStr="我收到的赞同" />
    <VLoading v-if="isLoading" />
    <div class="img" v-else-if="!profileApproval.length">
      <img src="../assets/images/approval.png" />
      <div class="tip">知音在路上啦~~</div>
    </div>
    <ProfileComment v-else :commentData="profileApproval" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_PROFILE_APPROVAL } from "@/store/type/actions";

import ProfileComment from '@/components/profileComment'

export default {
    name: "profileApproval",
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
                vm.$store.dispatch(FETCH_PROFILE_APPROVAL);

            }
        })
    },
    computed: {
        ...mapGetters(["isLoading", "profileApproval"]),
    }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/nofooter.less';
.profile-approval {
  &.noContent {
    background-color: #fff;
  }
  background-color: #fff;
  width: 100%;
  .img {
    background-color: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 501px;
      margin-top: 164px;
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