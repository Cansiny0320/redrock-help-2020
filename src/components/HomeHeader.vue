<template>
    <header class="home-header">
        <router-link
            class="item"
            :class="{ active: !isNew }"
            :to="{ name: 'homeHot' }"
            >最热问题</router-link
        >
        <router-link
            class="item"
            :class="{ active: isNew }"
            :to="{ name: 'homeNew' }"
            >最新问题</router-link
        >
    </header>
</template>

<script>
export default {
    name: 'homeHeader',
    data() {
        return {
            isNew: false,
        }
    },
    mounted() {
        this.refershInfo()
    },
    // 因为那个不是自己的路由，所以无法监控
    watch: {
        $route() {
            this.refershInfo()
        }
    },
    methods: {
        refershInfo() {
            this.isNew = this.$route.name === 'homeNew' ? true : false
        },
    }
}
</script>

<style lang="less" scoped>
.home-header {
    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    background-color: @HeaderBgColor;
    box-sizing: border-box;
    border-radius: 2px;
    padding: 0 131px;
    .item {
        font-size: 36px;
        line-height: 71px;
        color: #555;
        letter-spacing: 1px;
        font-weight: 500;
        &.active {
            position: relative;
            color: @fontColor;
            font-weight: bold;
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 91px;
                height: 4px;
                border-radius: 2px;
                background: rgba(118, 118, 242, 1);
            }
        }
    }
}
</style>
