<template>
  <div class="question-edit-photo">
    <ul>
      <li
        class="list"
        v-for="(item, index) of urlList"
        :key="index"
      >
        <img :src="item" />
        <div class="delete" @click="handelDeleteClick(index)">
          <BaseDeleteSvg />
        </div>
      </li>
      <div>
        <input
          id="fileUpload"
          type="file"
          multiple
          @change="previewFiles($event)"
        />
        <label
          for="fileUpload"
          class="add"
        ></label>
      </div>
    </ul>
  </div>
</template>

<script>
import BaseDeleteSvg from '@/assets/svg/BaseDelete.svg'

export default {
  name: "QuestionEditPhoto",
  components: {
    BaseDeleteSvg,
  },
  data () {
    return {
      urlList: []
    };
  },

  methods: {
    previewFiles (e) {
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
    },
    handelDeleteClick(index) {
      this.urlList.splice(index, 1)
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
    position: relative;
    margin-right: 10px;
    margin-bottom: 20px;
    img {
      width: 164px;
      height: 164px;
      border-radius: 10px;
      object-fit: cover;
    }
    .delete {
      top: 0px;
      left: 0px;
      right: 0;
      bottom: 0;
      position: absolute;
      display: flex;
      justify-content: flex-end;
      svg {
        margin: 5px;
        width: 50px;
        height: 50px;
        path:nth-of-type(1) {
          fill: rgba(0, 0, 0, 0.7);
        }
        path:nth-of-type(2) {
          fill: rgba(255, 255, 255, 0.9);
        }
      }
    }
  }
}

#fileUpload {
  display: none;
}
.add {
  display: block;
  border: 4px solid #dfe2e4;
  width: 164px;
  height: 164px;
  box-sizing: border-box;
  color: #dfe2e4;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 80px;
    margin-left: -40px;
    margin-top: -5px;
    border-top: 5px solid;
  }
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    height: 80px;
    margin-left: -5px;
    margin-top: -40px;
    border-left: 5px solid;
  }
}
</style>
