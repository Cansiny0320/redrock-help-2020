<template>
    <router-link :to="{ name: 'questionEdit' }" class="home-edit-button">
        <div class="icon">
            <img src="../assets/images/HomeEditButton.png" />
        </div>
    </router-link>
</template>

<script>


export default {
    name: 'homeEditButton',

}
</script>

<style lang="less" scoped>
@import '../assets/styles/button.less';
</style>

