<template>
  <VMask v-if="popupIsShow">
    <div class="tip">
      <p>{{ popupMassage }}</p>
    </div>
  </VMask>
</template>

<script>
import { mapGetters } from 'vuex'

import VMask from '@/components/VMask'

export default {
  name: "VToast",
  components: {
    VMask,
  },
  data () {
    return {
      isSucceed: false
    }
  },
  computed: {
    ...mapGetters(['popupIsShow', 'popupMassage'])
  }
};
</script>

<style lang="less" scoped>
.tip {
  border-radius: 10px;
  height: 75px;
  width: 310px;
  background: #9a9a9b;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  p {
    color: #ffffff;
    text-align: center;
    line-height: 75px;
  }
}
</style>
