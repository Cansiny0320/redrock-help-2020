<template>
  <div v-if="!isLoadingIdentity">
    <ProfileNew v-if="isNew" :isloadingIdentity="isLoadingIdentity" :profileData="profileIdentity" />
    <ProfileOld v-if="isOld" :isloadingIdentity="isLoadingIdentity" :profileData="profileIdentity" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_PROFILE_IDENTITY } from "@/store/type/actions";
import ProfileNew from "@/components/ProfileNew";
import ProfileOld from "@/components/ProfileOld";
import profileIdentify from "../store/profileIdentify";

export default {
  name: "profile",
  components: {
    ProfileNew,
    ProfileOld
  },
  mounted() {
    this.$store.dispatch(FETCH_PROFILE_IDENTITY);
  },

  computed: {
    ...mapGetters(["isLoadingIdentity", "profileIdentity"]),
    isNew() {
      if (this.profileIdentity.role == "新生") return true;
      else return false;
    },
    isOld() {
      if (this.profileIdentity.role == "志愿者") return true;
      else return false;
    }
  }
};
</script>
