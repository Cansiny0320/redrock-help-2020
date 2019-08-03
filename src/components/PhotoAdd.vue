<template>
    <div>
        <div class="add"></div>
    </div>
</template>


<script>
export default {
    name:"PhotoAdd"
}
</script>


<style lang = "less" scoped>
  .add{
    border: 4px solid #dfe2e4;
    width: 155px;
    height: 155px;
    color: #dfe2e4;
    position: relative;
    margin-left: 30px;
    margin-top: 40px;
}
  .add::before{
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80px;
  margin-left: -40px;
  margin-top: -5px;
  border-top: 5px solid;
}
.add::after {
 content: '';
 position: absolute;
 left: 50%;
 top: 50%;
 height: 80px;
 margin-left: -5px;
 margin-top: -40px;
 border-left: 5px solid;
}


</style>
