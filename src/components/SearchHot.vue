<template>
  <VHotTag
    name="热门搜索"
    :hotTagData="searchHot"
    @hotTagClick="handelSearchHotTagClick"
  />
</template>

<script>
import { mapGetters } from "vuex"
import { FETCH_SEARCH_HOT } from "@/store/type/actions"

export default {
  name: 'searchHot',
  mounted () {
    this.$store.dispatch(FETCH_SEARCH_HOT)
  },
  computed: {
    ...mapGetters(['isLoading', 'searchHot']),
  },
  methods: {
    handelSearchHotTagClick (index) {
      this.$router.push(`?q=${this.searchHot[index].name}`)
    }
  }
}
</script>



<style lang="less" scoped>
</style>
