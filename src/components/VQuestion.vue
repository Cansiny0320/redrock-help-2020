<template>
 <div>
     <div class="question">
         <div class="user">
             <img class="userimg">
             <span class="userName"></span>
         </div>
         <div class="questionContent"></div>
         <div class="questionTip">
             <p class="questionTag"></p>
             <p class="comment"></p>
         </div>

     </div>
 </div>

</template>

<script>
import { mapGetters } from "vuex"
import { FETCH_QUESTION_HOT } from "@/store/type/actions"
export default{
    name:"Vquestion",
//     mounted() {
// this.$store.dispatch(FETCH_QUESTION_HOT)
// },
// computed: {
// ...mapGetters(['isLoading', 'questionHot']),
// },
   

}

</script>

<style lang = "less" scoped>
 .question{
     width: 690px;
     height: 230px;
     border:2px solid @mainColor;
     border-radius:30px;
     position:relative;
     top: 320px;
     margin:0 auto;
     background: #ffffff;
 }
 .user{
     height:130px;
     display:flex;
     align-items: center;
 }
 .userimg{
     width:90px;
     height: 90px;
     border-radius: 50%;
     background: @mainColor;
     margin:20px;
    
 }

 .userName{
     color:@fontColor;
 }
 .questionContent{
     margin-left: 20px;
  
 }
    .questionTip{
        display: flex;
        justify-content: space-between;
        margin-top:20px;
        padding:0 50px;
    }
      p{
          color:@fontColor;
          font-size: 24px
      }

 

</style>