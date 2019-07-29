<template>
  <div class="search">
    <div
      class="back-icon"
      v-if="isShowBack"
      @click="handelBackClick"
    >
      <BaseBackSvg />
    </div>
    <div class="search-box">
      <input
        class="search-input"
        placeholder="告诉我你的疑惑吧"
        v-model="searchVaule"
      >
    </div>
    <div
      class="search-button-icon"
      @click="handelSearchButtonClick"
    >
      <SearchButtonSvg />
    </div>
  </div>

</template>


<script>
import SearchButtonSvg from '@/assets/svg/SearchButton.svg'
import BaseBackSvg from '@/assets/svg/BaseBack.svg'

export default {
  name: 'SearchBox',
  data () {
    return {
      isShowBack: false,
      searchVaule: null
    }
  },
  components: {
    SearchButtonSvg,
    BaseBackSvg,
  },
  methods: {
    handelSearchButtonClick () {
      if (this.searchVaule) {
        this.$router.push(`?q=${this.searchVaule}`)
      } else {
        this.$router.push(``)
      }
    },
    handelBackClick () {
      this.$router.push(``)
    }
  },
  watch: {
    $route (to) {
      this.searchVaule = to.query.q
      if (to.query.q) {
        this.isShowBack = true
      } else {
        this.isShowBack = false
      }
    }
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
  .search-button-icon {
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
  .back-icon {
    display: flex;
    align-items: center;
    padding-right: 20px;
    svg {
      width: 38px;
      height: 38px;
      path {
        fill: @mainColor;
      }
    }
  }
}
</style>