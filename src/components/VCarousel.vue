<template>
    <div class="v-carousel" @touchstart.prevent>
        <header @touchstart="handelBackClick">
            <BaseBackSvg />
            <span>{{ pageNum }}/{{ totalPageNum }}</span>
        </header>

        <carousel
            class="carousel"
            :perPage="1"
            :paginationEnabled="false"
            :centerMode="true"
            @page-change="handelPageChange"
            :navigateTo="navigateTo"
        >
            <slide
                class="slide"
                v-for="(item, index) of imagesUrl"
                :key="index"
            >
                <!-- <img :src="`${imgUrl}/getImage?imageName=${item.split('/')[3]}`"> -->
                <img :src="item" />
            </slide>
        </carousel>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { Carousel, Slide } from 'vue-carousel'

import BaseBackSvg from '@/assets/svg/BaseBack.svg'

export default {
    name: 'v-carousel',
    data() {
        return {
            pageNum: 1,
        }
    },
    props: {
        imagesUrl: {
            type: Array,
            required: true,
        },
        navigateTo: {
            type: Number,
            required: false,
        }
    },
    components: {
        Carousel,
        Slide,
        BaseBackSvg,
    },
    computed: {
        totalPageNum() {
            return this.imagesUrl.length
        },
        imgUrl() {
            return process.env.VUE_APP_API
        }
    },
    methods: {
        handelPageChange(pageNum) {
            this.pageNum = pageNum + 1
        },
        handelBackClick() {
            this.$emit('close')
        },
    }
}
</script>

<style lang="less" scoped>
.v-carousel {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000000;
    color: #fff;
    header {
        svg {
            width: 38px;
            height: 38px;
            path {
                fill: #fff;
            }
        }
        padding: 30px 0 0 20px;
        position: absolute;
        z-index: 1;
        display: flex;
        align-items: center;
        width: 100%;
        span {
            margin: 0 30px;
        }
    }
    .carousel {
        & /deep/ .VueCarousel-wrapper {
            .VueCarousel-inner {
                div {
                    height: 100vh;
                    display: flex;
                    align-items: center;
                }
            }
        }
        .slide {
            img {
                max-height: 80vh;
                max-width: 100%;
                margin: 0 auto;
            }
        }
    }
}
</style>


