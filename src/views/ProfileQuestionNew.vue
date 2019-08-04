<template>
  <div>
    <VHeader
    :titleStr = "titleStr"/>
    <ProfileQuestion
    :isLoading="isLoading"
    :questionData="questionNewList"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_PROFILE_QUESTION } from '@/store/type/actions'
import ProfileQuestion from '@/components/ProfileQuestion'

export default {
    name:"ProfileQuestionNew",
    data(){
        return {
           titleStr : "我提过的问题"
        }
    },
    components:{
        ProfileQuestion
    },
    mounted () {
    this.$store.dispatch(FETCH_PROFILE_QUESTION) 
    
  },
   computed: {
    ...mapGetters(['isLoading', 'questionNewList']),
    
    
  },
}
</script>

<style lang="less" scoped>

</style>
