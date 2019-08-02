<template>
  <div id="app">
    <VToast />
    <router-view class="router-app" />
    <TheFooterNavBar />
  </div>
</template>

<script>
import TheFooterNavBar from "@/components/TheFooterNavBar";
import VToast from "@/components/VToast";
export default {
  name: "app",
  components: {
    TheFooterNavBar,
    VToast
  },
 
};
</script>


<style lang="less">
.router-app {
  padding-bottom: 88px;
}
</style>
