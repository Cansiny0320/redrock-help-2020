<template>
  <div class="question-edit-photo">
    <ul>
      <li
        class="list"
        v-for="(item, index) of editImage"
        :key="index"
      >
        <img :src="item" />
        <div
          class="delete"
          @click="handelDeleteClick(index)"
        >
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
import { mapGetters } from 'vuex'

import BaseDeleteSvg from '@/assets/svg/BaseDelete.svg'
import { SET_EDIT_IMAGES, DELETE_EDIT_IMAGES } from '@/store/type/mutations'

export default {
  name: "QuestionEditPhoto",
  components: {
    BaseDeleteSvg,
  },
  methods: {
    previewFiles (e) {
      let files = e.target.files || e.dataTransfer.files;
      let filesLength = files.length;
      const reader = new FileReader();
      const img = new Image();
      for (let i = 0; i < filesLength; i++) {
        reader.readAsDataURL(files[i]);
        reader.onload = e => {
          // let url = e.target.result;
          // this.$store.commit(SET_EDIT_IMAGES, url)
          img.src = e.target.result;
        };
        img.onload = e => {
          // 缩放图片需要的canvas（也可以在DOM中直接定义canvas标签，这样就能把压缩完的图片不转base64也能直接显示出来）
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');


          // 图片原始尺寸
          const originWidth = e.path[0].width;
          const originHeight = e.path[0].height;

          // 最大尺寸限制，可通过设置宽高来实现图片压缩程度
          const maxWidth = 1000,
            maxHeight = 1000;
          // 目标尺寸
          let targetWidth = originWidth,
            targetHeight = originHeight;
          // 图片尺寸超过300x300的限制
          if (originWidth > maxWidth || originHeight > maxHeight) {
            if (originWidth / originHeight > maxWidth / maxHeight) {
              // 更宽，按照宽度限定尺寸
              targetWidth = maxWidth;
              targetHeight = Math.round(maxWidth * (originHeight / originWidth));
            } else {
              targetHeight = maxHeight;
              targetWidth = Math.round(maxHeight * (originWidth / originHeight));
            }
          }
          // canvas对图片进行缩放
          canvas.width = targetWidth;
          canvas.height = targetHeight;
          // 清除画布
          context.clearRect(0, 0, targetWidth, targetHeight);
          // 图片压缩
          context.drawImage(img, 0, 0, targetWidth, targetHeight);
          /*第一个参数是创建的img对象；第二三个参数是左上角坐标，后面两个是画布区域宽高*/

          //压缩后的图片转base64 url
          /*canvas.toDataURL(mimeType, qualityArgument),mimeType 默认值是'image/png';
           * qualityArgument表示导出的图片质量，只有导出为jpeg和webp格式的时候此参数才有效，默认值是0.92*/
          const newUrl = canvas.toDataURL('image/jpeg', 0.92); //base64 格式
          this.$store.commit(SET_EDIT_IMAGES, newUrl)
        };
      }
      // 允许多次选择同样的照片
      e.target.value = ''
    },
    handelDeleteClick (index) {
      this.$store.commit(DELETE_EDIT_IMAGES, index)
    }
  },
  computed: {
    ...mapGetters(['editImage'])
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
