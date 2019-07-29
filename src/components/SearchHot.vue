<template>
  <div class="hot">
    <div class="title">热门搜索</div>
    <div class="content">
      <div class="item" v-for="item of searchHot" :key="item.id">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { FETCH_SEARCH_HOT } from "@/store/type/actions"

export default {
  mounted() {
    this.$store.dispatch(FETCH_SEARCH_HOT)
  },
  computed: {
    ...mapGetters(['isLoading', 'searchHot']),
  },
}
</script>



<style lang="less" scoped>
.hot {
  .title {
    margin: 30px 0 0 28px;
    font-size: 28px;
    color: #9e9e9f;
  }

  .content {
    margin: 0 16px 0 16px;
    display: flex;
    flex-wrap: wrap;
    .item {
      height: 44px;
      line-height: 44px;
      border-radius: 44px;
      margin: 28px 12px 0 12px;
      padding: 0 20px 0 20px;
      background-color: #ffffff;
      border: 2px solid @mainColor;
      box-sizing: border-box;
      font-size: 28px;
      color: @mainColor;
    }
  }
}
</style>
