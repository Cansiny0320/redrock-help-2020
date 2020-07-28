<template>
    <div class="v-hot-tag">
        <div class="title">{{ name }}</div>
        <div class="content">
            <div
                class="item"
                v-for="(item, index) of hotTagData"
                :key="item.id"
                @click="handelItemClick(index)"
                :class="{ active: whichItemsClicked[index] }"
            >
                {{ item.name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "vHotTag",
    props: {
        name: {
            type: String,
            required: true
        },
        hotTagData: {
            type: Array,
            required: true
        }
    },
    methods: {
        handelItemClick(index) {
            this.$emit("hotTagClick", index)
            if (this.whichItemsClicked[index]) {
                this.$set(this.whichItemsClicked, index, 0);
                this.$emit('hotTagRemove', index)
            } else {
                this.$set(this.whichItemsClicked, index, 1);
                this.$emit('hotTagAdd', index)
            }
        }
    },
    data() {
        return {
            whichItemsClicked: Array(this.hotTagData.length + 1)
        };
    }
};
</script>


<style lang="less" scoped>
.v-hot-tag {
    .title {
        margin: 30px 0 14px 30px;
        font-size: 28px;
        color: #555;
    }

    .content {
        margin: 0 16px 0 16px;
        display: flex;
        flex-wrap: wrap;
        .item {
            border-radius: 40px;
            margin: 16px 12px 0 12px;
            padding: 8px 16px 8px 16px;
            background-color: #ffffff;
            border: 2px solid #555;
            box-sizing: border-box;
            color: #555;
            font-size: 28px;
        }
        .active {
            background: #aaabfb;
            color: #fff;
            border: 2px solid transparent;
        }
    }
}
</style>