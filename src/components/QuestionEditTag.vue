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

export default {
  name: 'questionEditTag',
  methods: {
    handelHomeHotTagClick(index) {
      console.log(this.tagHot[index])
    }
  },
  mounted () {
    this.$store.dispatch(FETCH_TAG_HOT)
  },
  computed: {
    ...mapGetters(['isLoading', 'tagHot']),
  },
}
</script>


<style lang="less" scoped>

</style>
