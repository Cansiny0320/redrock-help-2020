<template>
  <div class="search">
    <SearchBox />
    <SearchHot v-if="!q" />
    <SearchQuestionList v-else />
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox'
import SearchHot from '@/components/SearchHot'
import SearchQuestionList from '@/components/SearchQuestionList'

export default {
  name: 'search',
  data () {
    return {
      q: null
    }
  },
  components: {
    SearchBox,
    SearchHot,
    SearchQuestionList,
  },
  mounted () {
    this.q = this.$route.query.q
  },
  watch: {
    $route (to) {
      this.q = to.query.q
    }
  }
}
</script>

