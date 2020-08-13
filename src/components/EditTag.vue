<template>
  <div class="question-edit-tag">
    <VHotTag
      name="#请选择话题标签#"
      :hotTagData="tagHot"
      @hotTagAdd="handelHotTagAdd"
      @hotTagRemove="handelHotTagRemove"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { FETCH_TAG_HOT } from "@/store/type/actions"
import { SET_EDIT_TAGS, DELETE_EDIT_TAGS } from '@/store/type/mutations'

export default {
    name: 'questionEditTag',
    methods: {
        handelHotTagAdd(index) {
            this.$store.commit(SET_EDIT_TAGS, this.tagHot[index].id)
        },
        handelHotTagRemove(index) {
            this.$store.commit(DELETE_EDIT_TAGS, this.tagHot[index].id)
        },
    },
    mounted() {
        this.$store.dispatch(FETCH_TAG_HOT)
    },
    computed: {
        ...mapGetters(['isLoading', 'tagHot']),
    },
}
</script>


<style lang="less" scoped>
</style>
