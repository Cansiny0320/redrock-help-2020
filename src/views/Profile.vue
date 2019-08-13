<template>
  <div>
    <ProfileNew v-if="isNew" :profileData="profileIdentity" />
    <ProfileOld v-if="isOld" :profileData="profileIdentity" />
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
  mounted() {
    this.$store.dispatch(FETCH_PROFILE_IDENTITY);
  },

  computed: {
    ...mapGetters([ "profileIdentity", "isLoading"]),
    isNew() {
      if (this.profileIdentity.role === 0) return true;
      else return false;
    },
    isOld() {
      if (this.profileIdentity.role === 1) return true;
      else return false;
    }
  }
};
</script>
