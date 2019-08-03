<template>
  <div id="app">
    <router-view class="router-app" />
    <TheFooterNavBar />
    <VToast />
    <VPopup />
  </div>
</template>

<script>
import TheFooterNavBar from "@/components/TheFooterNavBar";

export default {
  name: "app",
  components: {
    TheFooterNavBar,
  },
 
};
</script>


<style lang="less">
.router-app {
  padding-bottom: 88px;
}
</style>
