<template>
    <div class="home-hot-tag">
        <HotTagForHome
            :hotTagData="tagHot"
            @hotTagClick="handelHomeHotTagClick"
            :activeId="activeId"
        />
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import { FETCH_TAG_HOT } from "@/store/type/actions"
import HotTagForHome from '@/components/HotTagForHome'
export default {
    name: 'homeHotTag',
    components: {
        HotTagForHome
    },
    data() {
        return {
            activeId: -1,
        }
    },
    methods: {
        handelHomeHotTagClick(index) {
            this.activeId = this.tagHot[index].id
            let query = { id: this.tagHot[index].id }
            this.$router.push({ name: 'homeTag', query })
        }
    },
    mounted() {
        this.$store.dispatch(FETCH_TAG_HOT)
        this.activeId = parseInt(this.$route.query.id) || -1
    },
    computed: {
        ...mapGetters(['isLoadingTagHot', 'tagHot']),
    },
}
</script>


<style lang="less" scoped>
.home-hot-tag {
    position: fixed;
    z-index: 999;
    top: 70px;
    left: 0;
    right: 0;
    // height: 200px;
    overflow: hidden;
    background-color: @HeaderBgColor;
}
</style>
