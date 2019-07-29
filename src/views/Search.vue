<template>
  <div class="search">
    <SearchBox />
    <SearchHot />
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox'
import SearchHot from '@/components/SearchHot'

export default {
  name: 'search',
  components: {
    SearchBox,
    SearchHot,
  }
}
</script>

