<template>
    <div class="v-hot-tag">
        <div class="content">
            <router-link
                to="/"
                tag="div"
                class="item"
                :class="{ active: activeId === -1 }"
            >
                热门
            </router-link>
            <div
                class="item"
                v-for="(item, index) of hotTagData"
                :key="item.id"
                @click="handelItemClick(index, item.id)"
                :class="{ active: item.id === activeId }"
            >
                {{ item.name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HotTagForHome",
    props: {
        activeId: {
            type: Number,
        },
        hotTagData: {
            type: Array,
            required: true
        }
    },

    methods: {
        handelItemClick(index) {
            this.$emit("hotTagClick", index)
        },
    },
};
</script>


<style lang="less" scoped>
.v-hot-tag {
    .content {
        margin: 0 24px;
        display: flex;
        justify-content: space-between;
        .item {
            background-color: #ffffff;
            box-sizing: border-box;
            font-size: 30px;
            color: #333333;
            padding: 32px 0;
        }
        .active {
            color: @mainColor;
        }
    }
}
</style>