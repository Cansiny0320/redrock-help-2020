<template>
  <div class="profile-new profile-item">
    <div class="user">
      <img class="img" :src="profileData.author.avatar" />
      <div class="name">{{ profileData.author.name }}</div>
    </div>
    <div
      class="question"
      @click="handleProfileQuestionClick(profileData.author.id)"
    >
      <span class="item"
        >我提过的问题：
        <span class="num">{{ profileData.author.questionsNum }}</span>
        <span class="text">个</span></span
      >
      <div class="front-icon">
        <BaseFront />
      </div>
    </div>
    <div class="comment" @click="handleProfileAnswerClick">
      <span class="item"
        >我收到的回答：
        <span class="num">{{ profileData.author.answersNum }}</span>
        <span class="text">个</span></span
      >
      <span class="new" v-if="hasNew"
        >有{{ profileData.number.newNum }}条未读消息</span
      >
      <div class="front-icon">
        <BaseFront />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
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
            this.setHasNew(false)
            this.$router.push({ name: 'profileComment' })
        },
        ...mapMutations({
            setHasNew: 'SET_HAS_NEW',
        })
    },
    computed: {
        ...mapGetters([
            'hasNew'
        ])
    }

};
</script>

<style lang="less" scoped>
@import '../assets/styles/profile.less';
</style>
