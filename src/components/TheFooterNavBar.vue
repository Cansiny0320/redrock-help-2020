<template>
  <nav class="footer">
    <router-link
      :to="{ name: 'homeHot' }"
      class="item"
      :class="{ active: isHome }"
    >
      <div class="icon" v-if="isHome">
        <img src="../assets/images/NavBarHomeActive.png" alt="" />
      </div>
      <div class="icon" v-else>
        <img src="../assets/images/NavBarHome.png" />
      </div>
      <div class="text">首页</div>
    </router-link>
    <router-link
      :to="{ name: 'profile' }"
      class="item"
      :class="{ active: isProfile }"
    >
      <div class="icon" v-if="isProfile">
        <img src="../assets/images/NavBarProfileActive.png" alt="" />
        <div class="dot" v-if="hasNew"></div>
      </div>
      <div class="icon" v-else>
        <img src="../assets/images/NavBarProfile.png" alt="" />
        <div class="dot" v-if="hasNew"></div>
      </div>
      <div class="text">我的</div>
    </router-link>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'theFooterNavBar',
    data() {
        return {
            isHome: true,
            isProfile: false,
        }
    },
    computed: {
        ...mapGetters([
            'hasNew'
        ])
    },
    watch: {
        $route(to) {
            this.isHome = to.name.match(/home/g) || to.name.match(/question/g) ? true : false
            this.isProfile = to.name.match(/profile/g) ? true : false
        }
    }
}
</script>


<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 98px;
  box-sizing: border-box;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 0px 15px 0px rgba(118, 118, 242, 0.1);
  .item {
    height: 98px;
    width: 100%;
    text-align: center;
    font-size: 20px;
    color: @fontColor;
    padding-top: 12px;
    .text {
      font-weight: bold;
    }
    &.active {
      color: @mainColor;
      path {
        fill: @mainColor;
      }
    }
  }
  .icon {
    display: inline-block;
    position: relative;
    width: 39px;
    height: 41px;
    margin-bottom: 10px;
    img {
      width: 100%;
    }
    .dot {
      position: absolute;
      width: 14px;
      height: 15px;
      background: rgba(254, 103, 96, 1);
      border-radius: 50%;
      top: -11px;
      right: -9px;
    }
  }
}
</style>
