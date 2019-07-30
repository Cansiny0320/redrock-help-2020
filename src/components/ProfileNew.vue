<template>
 <div class="new">
     <div class="user">
         <img class="img">
         <span class="name"></span>
     </div>
     <div class="question">
         <span> 我提过的问题</span>
        <div class="front-icon">
             <BaseFront/>
         </div>    
     </div>
     <div class="comment">
         <span>我收到的评论</span>
         <div class="front-icon">
             <BaseFront/>
         </div>    
     </div>
 </div>    
</template>

<script>
import BaseFront from "@/assets/svg/BaseFront.svg"
export default {
    name:"ProfileNew",
    components:{
        BaseFront
    }
}
</script>

<style lang="less" scoped>
   .user {
      height: 130px;
      display: flex;
      align-items: center;
      margin: 30px;
      .img {
        width: 140px;
        height: 140px;
        border-radius: 140px;
        background: @mainColor;
     
      }
      .name {
        color: @fontColor;
      }
    }
   .question,.comment{
        width:690px;
        height:90px;
        border:2px solid @mainColor;
        border-radius: 15px;
        margin:0 auto 30px auto;
        position: relative;
        span{
            line-height: 90px;
            padding-left: 30px;
            color: #6a6a6a;
            font-size: 30px;
        }
    .front-icon{
        position: absolute;
        top:25px;
        left:640px;
           svg {
            width: 40px;
            height: 40px;
              path{
                  fill:#dfdfde;
              }
            }
        
      }

    }
     
</style>
