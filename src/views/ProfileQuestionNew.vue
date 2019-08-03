<template>
  <div>
    <VHeader
    :titleStr = "titleStr"/>
    <ProfileQuestion
    :isLoading="isLoading"
    :questionData="questionList"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_QUESTION_HOT } from '@/store/type/actions'
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
    this.$store.dispatch(FETCH_QUESTION_HOT) 
    
  },
   computed: {
    ...mapGetters(['isLoading', 'questionList']),
    
    
  },
}
</script>

<style lang="less" scoped>

</style>
