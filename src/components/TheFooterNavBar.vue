<template>
  <nav class="footer">
    <router-link
      :to="{ name: 'home' }"
      class="item"
    >
      <div class="icon">
        <NavBarHomeSvg />
      </div>
      <div class="text">首页</div>
    </router-link>
    <router-link
      :to="{ name: 'search' }"
      class="item"
    >
      <div class="icon">
        <NavBarSearchSvg />
      </div>
      <div class="text">搜索</div>
    </router-link>
    <router-link
      :to="{ name: 'profile' }"
      class="item"
    >
      <div class="icon">
        <NavBarProfileSvg />
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
  components: {
    NavBarHomeSvg,
    NavBarSearchSvg,
    NavBarProfileSvg,
  },
}
</script>


<style lang="less" scoped>
@fontColor: #a0a0a0;

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 88px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
  border-top: 1px solid @fontColor;

  .item {
    width: 100%;
    text-align: center;
    font-size: 22px;
    color: @fontColor;
    &.router-link-exact-active {
      color: @mainColor;

      & /deep/ path {
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
