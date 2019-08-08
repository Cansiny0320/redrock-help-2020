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
        :src="item"
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
  name: 'vImageForAnswer',
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
      width: 154px;
      height: 154px;
    }
    img {
      border-radius: 10px;
      object-fit: cover;
      &.one {
        width: 100%;
        height: 400px;
      }
      &.two {
        width: 320px;
        height: 240px;
      }
      &.three {
        width: 210px;
        height: 170px;
      }
      &.four {
        width: 154px;
        height: 154px;
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

