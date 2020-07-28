<template>
    <div class="profile-new profile-item">
        <div class="user">
            <img class="img" :src="profileData.avatar | https" />
            <div class="info">
                <div class="name">{{ profileData.name }}</div>
                <div class="id">统一认证码：{{ profileData.id }}</div>
            </div>
        </div>

        <div
            class="question"
            @click="handleProfileQuestionClick(profileData.id)"
        >
            <span>我提过的问题 {{ profileData.questionsNum }} 个</span>
            <div class="front-icon">
                <BaseFront />
            </div>
        </div>
        <div class="comment" @click="handleProfileAnswerClick('comment')">
            <span>我收到的回答 {{ profileData.answersNum }} 个</span>
            <span class="new">有{{ profileData.newAnswerNum }}条未读消息</span>
            <div class="front-icon">
                <BaseFront />
            </div>
        </div>
    </div>
</template>

<script>
import BaseFront from "@/assets/svg/BaseFront.svg";
export default {
    name: "profileNew",
    components: {
        BaseFront
    },
    props: {
        profileData: {
            type: Object,
            required: true
        }
    },
    methods: {
        handleProfileQuestionClick(id) {
            this.$router.push({ name: 'profileQuestion', query: { id } })
        },
        handleProfileAnswerClick(type) {
            this.$router.push({ name: 'profileAnswer', query: { type } })
        },
    }
};
</script>

<style lang="less" scoped>
@import '../assets/styles/profile.less';
</style>
