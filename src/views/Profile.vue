<template>
  <div>
    <ProfileNew v-if = "isNew"/>
    <ProfileOld v-if = "isOld"/>
  </div>
</template>

<script>
import ProfileNew from "@/components/ProfileNew"
import ProfileOld from "@/components/ProfileOld"

export default {
  name: 'profile',
  components:{
    ProfileNew,
    ProfileOld
  },
  data(){
    return{
      isNew:false,
      isOld:true
    }
  }
 
}
</script>
