<template>
  <div>
    <input
      id="fileUpload"
      type="file"
      @change="preview($event)"
    >
    <label
      for="fileUpload"
      class="add"
    ></label>
  </div>
</template>


<script>

export default {
  name: "PhotoAdd",
  methods: {
    preview (e) {
      let fileList = e.target.files;
      let fr = new FileReader;

      console.log(fileList)

    }
  }
}
</script>


<style lang = "less" scoped>
#fileUpload {
  display: none;
}
.add {
  display: block;
  border: 4px solid #dfe2e4;
  width: 155px;
  height: 155px;
  color: #dfe2e4;
  position: relative;
}
.add::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80px;
  margin-left: -40px;
  margin-top: -5px;
  border-top: 5px solid;
}
.add::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  height: 80px;
  margin-left: -5px;
  margin-top: -40px;
  border-left: 5px solid;
}
</style>
