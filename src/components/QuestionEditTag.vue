<template>
  <div class="question-edit-tag">
    <VHotTag
      name="选择标签"
      :hotTagData="tagHot"
      @hotTagClick="handelHomeHotTagClick"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { FETCH_TAG_HOT } from "@/store/type/actions"
import VHotTag from '@/components/VHotTag'

export default {
  name: 'questionEditTag',
  components: {
    VHotTag
  },
  methods: {
    handelHomeHotTagClick(index) {
      console.log(this.tagHot[index])
    }
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

</style>
