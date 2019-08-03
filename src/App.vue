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
import VToast from "@/components/VToast";
import VPopup from '@/components/VPopup'

export default {
  name: "app",
  components: {
    TheFooterNavBar,
    VToast,
    VPopup,
  },
 
};
</script>


<style lang="less">
.router-app {
  padding-bottom: 88px;
}
</style>
