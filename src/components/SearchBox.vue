<template>
  <div class="search">
    <div class="search-box">
      <input
        class="search-input"
        placeholder="告诉我你的疑惑吧"
      >
    </div>
    <div class="svg-icon">
      <SearchButtonSvg />
    </div>
  </div>

</template>


<script>
import SearchButtonSvg from '@/assets/svg/SearchButton.svg'

export default {
  components: {
    SearchButtonSvg,
  }
}
</script>

<style lang="less" scoped>
.search {
  margin: 30px 28px 0 28px;
  height: 64px;
  display: flex;
  flex: 1;
  .search-box {
    height: 100%;
    width: 100%;
    // bug
    display: flex;
    flex: 1;
    border: 2px solid @mainColor;
    box-sizing: border-box;
    border-radius: 64px;
    background-color: #ffffff;

    .search-input {
      height: 100%;
      width: 100%;
      color: #7e7e7e;
      font-size: 30px;
      border-radius: 64px;
      padding: 0 32px 0 32px;
    }
  }
  .svg-icon {
    width: 94px;
    margin-left: 20px;
    background-color: @mainColor;
    border-radius: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 30px;
      height: 30px;
      path {
        fill: #ffffff;
      }
    }
  }
}
</style>