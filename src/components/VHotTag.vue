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
                {{ item.label }}
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
                this.$set(this.whichItemsClicked, index, false);
                this.$emit('hotTagRemove', index)
            } else {
                if (this.selectedTagNum >= this.selectTagLimit) {
                    const preIndex = this.whichItemsClicked.indexOf(true)
                    this.$set(this.whichItemsClicked, preIndex, false)
                    this.$emit('hotTagRemove', preIndex)
                }
                this.$set(this.whichItemsClicked, index, true);
                this.$emit('hotTagAdd', index)
            }
        }
    },
    data() {
        return {
            whichItemsClicked: Array(this.hotTagData.length + 1),
            selectedTagNum: 0,
            selectTagLimit: 2,
        };
    },
    watch: {
        whichItemsClicked() {
            let count = 0;
            this.whichItemsClicked.forEach(item => {
                item && count++;
            })
            this.selectedTagNum = count;
        },
    }
};
</script>


<style lang="less" scoped>
.v-hot-tag {
    .title {
        margin: 32px 0 32px 24px;
        font-size: 28px;
        color: @fontLightColor;
    }

    .content {
        margin: 0 24px;
        display: flex;
        flex-wrap: wrap;
        .item {
            border-radius: 100px;
            margin-bottom: 40px;
            margin-right: 35px;
            padding: 10px 24px;
            background-color: #ffffff;
            border: 1px solid #999;
            box-sizing: border-box;
            color: #999;
            font-size: 28px;
            font-weight: 500;
        }
        .active {
            background: #8c8cfb;
            color: #fff;
            border: 1px solid transparent;
        }
    }
}
</style>