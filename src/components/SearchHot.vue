<template>
  <VHotTag name="热门搜索" :hotTagData="searchHot" @hotTagClick="handelSearchHotTagClick"/>
</template>

<script>
import { mapGetters } from "vuex"
import { FETCH_SEARCH_HOT } from "@/store/type/actions"
import VHotTag from '@/components/VHotTag'

export default {
  name: 'searchHot',
  components: {
    VHotTag
  },
  mounted() {
    this.$store.dispatch(FETCH_SEARCH_HOT)
  },
  computed: {
    ...mapGetters(['isLoadingSearchHot', 'searchHot']),
  },
  methods: {
    handelSearchHotTagClick(index) {
      this.$router.push(`?q=${this.searchHot[index].name}`)
    }
  }
}
</script>



<style lang="less" scoped>
</style>
