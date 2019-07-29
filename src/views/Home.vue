<template>
  <div class="home">
    <HomeHeader />
    <router-view />
    <HomeEditButton />
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
  }
}
</script>
