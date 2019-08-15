<template>
  <div class="profile">
    <VLoading
      :number="1"
      v-if="isLoading"
      class="loading"
    />
    <template v-else>
      <ProfileNew
        v-if="isNew"
        :profileData="profileIdentity"
      />
      <ProfileOld
        v-else
        :profileData="profileIdentity"
      />
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_PROFILE_IDENTITY } from "@/store/type/actions";
import ProfileNew from "@/components/ProfileNew";
import ProfileOld from "@/components/ProfileOld";

export default {
  name: "profile",
  components: {
    ProfileNew,
    ProfileOld
  },
  mounted () {
    this.$store.dispatch(FETCH_PROFILE_IDENTITY);
  },
  computed: {
    ...mapGetters(["profileIdentity", "isLoading"]),
    isNew () {
      return parseInt(localStorage.getItem('role')) === 1
    },
  }
};
</script>

<style lang="less" scoped>
.loading {
  margin-top: 30px; 
}
</style>
