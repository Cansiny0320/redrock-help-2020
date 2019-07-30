<template>
  <div class="home-hot-tag">
    <VHotTag
      name="热门标签"
      :hotTagData="tagHot"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { FETCH_TAG_HOT } from "@/store/type/actions"
import VHotTag from '@/components/VHotTag'

export default {
  name: 'homeHotTag',
  components: {
    VHotTag
  },
  mounted () {
    this.$store.dispatch(FETCH_TAG_HOT)
  },
  computed: {
    ...mapGetters(['isLoadingTagHot', 'tagHot']),
  },
}
</script>


<style lang="less" scoped>
.home-hot-tag {
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  height: 220px;
  overflow: hidden;
  background-color: #f2f6f9;
  border-bottom: 1px solid @fontColor;
}
</style>
