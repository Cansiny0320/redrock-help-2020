<template>
  <VHotTag name="热门搜索" :hotTagData="searchHot"/>
</template>

<script>
import { mapGetters } from "vuex"
import { FETCH_SEARCH_HOT } from "@/store/type/actions"
import VHotTag from '@/components/VHotTag'

export default {
  components: {
    VHotTag
  },
  mounted() {
    this.$store.dispatch(FETCH_SEARCH_HOT)
  },
  computed: {
    ...mapGetters(['isLoadingSearchHot', 'searchHot']),
  },
}
</script>



<style lang="less" scoped>
</style>
