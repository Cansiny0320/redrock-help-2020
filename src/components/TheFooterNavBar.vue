<template>
  <nav class="footer">
    <router-link
      :to="{ name: 'homeHot' }"
      class="item"
      :class="{ active: isHome }"
    >
      <div class="icon" v-if="isHome">
        <NavBarHomeSvg />
      </div>
      <div class="img" v-else>
        <img src="../assets/img/HomeUnactive.png" alt="">
      </div>
      <div class="text">首页</div>
    </router-link>
    <router-link
      :to="{ name: 'search' }"
      class="item"
      :class="{ active: isSearch }"
    >
      <div class="icon" v-if="isSearch">
        <img src="../assets/img/ActiveSearch.png" alt="">
      </div>
      <div class="img" v-else>
        <img src="../assets/img/search.png" alt="">
      </div>
      <div class="text">搜索</div>
    </router-link>
    <router-link
      :to="{ name: 'profile' }"
      class="item"
      :class="{ active: isProfile }"
    >
      <div class="icon" v-if="isProfile">
        <NavBarProfileSvg />
      </div>
      <div class="img" v-else>
        <img src="../assets/img/Profile.png" alt="">
      </div>
      <div class="text">我的</div>
    </router-link>
  </nav>
</template>

<script>
import NavBarHomeSvg from '@/assets/svg/NavBarHome.svg'
import NavBarSearchSvg from '@/assets/svg/NavBarSearch.svg'
import NavBarProfileSvg from '@/assets/svg/NavBarProfile.svg'

export default {
  name: 'theFooterNavBar',
  components: {
    NavBarHomeSvg,
    NavBarSearchSvg,
    NavBarProfileSvg,
  },
  data() {
    return {
      isHome: true,
      isSearch: false,
      isProfile: false,
    }
  },
  watch: {
    $route (to) {
      this.isHome = to.name.match(/home/g) || to.name.match(/question/g) ? true : false
      this.isSearch = to.name === 'search' ? true : false
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
  height: 88px;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
  border-top: 1px solid @borderColor;

  .item {
    width: 100%;
    text-align: center;
    font-size: 22px;
    color: @fontColor;
    img {
      width: 52px;
      height: 52px;
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
    width: 52px;
    height: 52px;
  }
}
</style>
