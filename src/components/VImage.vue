<template>
  <div class="v-image">
    <VCarousel :imagesUrl="imagesUrl" v-if="isShowCarousel" @close="handelCloseClick" :navigateTo="navigateTo"/>
    <div
      v-for="(item, index) of showImages"
      :key="index"
      class="item"
      :class="{ four : fourImage }"
      @click="handelImageClick(index)"
    >
      <img
        :src="`${imgUrl}/getImage?imageName=${item.split('/')[3]}`"
        :class="[
          { one : oneImage },
          { two : twoImage },
          { three : threeImage },
          { four : fourImage }
        ]"
      >
      <div
        class="tips"
        v-if="moreImage && index === 3"
      >
        <span>+{{ imagesLeftNum }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vImage',
  props: {
    imagesUrl: {
      type: Array,
      required: true
    },
  },
  data () {
    return {
      showImages: this.imagesUrl.slice(0, 4),
      isShowCarousel: false,
      navigateTo: 0,
    }
  },
  methods: {
    handelImageClick (index) {
      this.isShowCarousel = true
      this.navigateTo = index
    },
    handelCloseClick () {
      this.isShowCarousel = false
    },
  },
  computed: {
    imagesLeftNum () {
      return this.imagesUrl.length - 4
    },
    oneImage () {
      return this.showImages.length === 1
    },
    twoImage () {
      return this.showImages.length === 2
    },
    threeImage () {
      return this.showImages.length === 3
    },
    fourImage () {
      return this.showImages.length === 4
    },
    moreImage () {
      return this.imagesUrl.length > 4
    },
    imgUrl () {
      return process.env.VUE_APP_API
    }
  }
}
</script>

<style lang="less" scoped>
.v-image {
  display: flex;
  justify-content: space-between;
  .item {
    position: relative;
    &.four {
      width: 163px;
      height: 163px;
    }
    img {
      border-radius: 10px;
      object-fit: cover;
      &.one {
        width: 100%;
        height: 410px;
      }
      &.two {
        width: 334px;
        height: 250px;
      }
      &.three {
        width: 220px;
        height: 180px;
      }
      &.four {
        width: 163px;
        height: 163px;
      }
    }
  }

  .tips {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    color: #ffffff;
    font-size: 40px;
  }
}
</style>

