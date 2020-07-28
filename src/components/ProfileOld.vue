<template>
    <div class="new profile-item">
        <div class="user">
            <img class="img" :src="profileData.author.avatar | https" />
            <div class="info">
                <div class="name">{{ profileData.author.name }}</div>
                <div class="id">统一认证码：{{ profileData.id }}</div>
            </div>
        </div>
        <div class="answer" @click="handleClick('answers')">
            <span>我回答的问题： {{ profileData.author.answersNum }} 个</span>
            <div class="front-icon">
                <BaseFront />
            </div>
        </div>
        <div class="approval" @click="handleClick('approval')">
            <span>我收到的赞同： {{ profileData.number.approvalNum }} 个</span>
            <div class="front-icon">
                <BaseFront />
            </div>
        </div>

        <!-- <div class="oppose" @click="handleClick('oppose')">
            <span>我收到的反对 {{ profileData.number.opposeNum }} 个</span>
            <div class="front-icon">
                <BaseFront />
            </div>
        </div> -->
    </div>
</template>

<script>
import BaseFront from "@/assets/svg/BaseFront.svg";
export default {
    name: "ProfileOld",
    components: {
        BaseFront,
    },
    props: {
        profileData: {
            type: Object,
            required: true
        }
    },
    methods: {
        handleClick(type) {
            this.$router.push({ name: 'profileAnswer', query: { type } })
        }
    }
};
</script>

<style lang="less" scoped>
@import '../assets/styles/profile.less';
</style>
