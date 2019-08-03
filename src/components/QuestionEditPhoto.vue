<template>
  <div class="question-edit-photo">
    <div class="imgContain">
      <ul>
        <li class="imgList" v-for="item in urlList" :key="item.data">
          <img :src="item" />
          <span class="delete"></span>
        </li>

        <li>
          <div>
            <input id="fileUpload" type="file" multiple @change="previewFiles($event)" />
            <label for="fileUpload" class="add"></label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionEditPhoto",
  data() {
    return {
      urlList: []
    };
  },

  methods: {
    previewFiles(e) {
      let files = e.target.files || e.dataTransfer.files;
      const imgMasSize = 1024 * 1024 * 10; // 10MB
      let filesLength = files.length;
      for (let i = 0; i < filesLength; i++) {
        let reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = e => {
          let url = e.target.result;
          this.urlList.push(url);
        };
      }
    }
  }
};
</script>

<style lang="less" scoped>
ul {
  margin: 30px 20px 30px 30px;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 174px;
    img {
      width: 164px;
      height: 164px;
      border-radius: 10px;
    }
     .delete{
        background: #657178;
        color: #ffffff;
        border-radius: 100%;
        line-height: 35px;
        text-align: center;
        height: 35px;
        width: 35px;
        font-size: 26px;
        padding: 5px;
        opacity: 0.7;
        position: relative;
        bottom: 150px;
        left:120px;
    }

    .delete::before {
        content: '\2716';
    }
  }
}

#fileUpload {
  display: none;
}
.add {
  display: block;
  border: 4px solid #dfe2e4;
  width: 147px;
  height: 147px;
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
