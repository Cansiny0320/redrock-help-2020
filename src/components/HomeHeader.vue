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
    height: 70px;
    font-size: 36px;
    line-height: 70px;
    display: flex;
    justify-content: space-evenly;
    color: #353535;
    background-color: @HeaderBgColor;
    border-bottom: 2px solid @borderColor;
    box-sizing: border-box;
    .active {
        border-bottom: 4px solid @mainColor;
        color: #222222;
    }
}
</style>
