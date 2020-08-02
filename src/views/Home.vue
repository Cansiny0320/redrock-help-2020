<template>
    <div class="home">
        <HomeHeader />
        <router-view class="router-home" />
        <HomeEditButton v-if="isShowHomeEditButton" />
    </div>
</template>

<script>
import HomeEditButton from '@/components/HomeEditButton'
import HomeHeader from '@/components/HomeHeader'
export default {
    name: 'home',
    components: {
        HomeEditButton,
        HomeHeader,

    },
    computed: {
        isShowHomeEditButton() {
            return parseInt(localStorage.getItem('role')) === 1
        }
    }
}
</script>

<style lang="less" scoped>
.home {
    background-color: @backgroundColor;
    min-height: calc(100vh - 98px);
}
.router-home {
    padding-top: 70px;
}
</style>
