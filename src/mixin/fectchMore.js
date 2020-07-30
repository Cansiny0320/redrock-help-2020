import throttle from '@/common/throttle';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      throttleFunction: null,
    };
  },
  mounted() {
    this.throttleFunction = throttle(
      () => {
        if (
          window.innerHeight + window.scrollY + 10 >=
            document.body.offsetHeight &&
          !this.isLoadingMore
        ) {
          this.handelFecthMore();
        }
      },
      100,
      200,
    );
    window.addEventListener('scroll', this.throttleFunction, false);
  },
  destroyed() {
    window.removeEventListener('scroll', this.throttleFunction, false);
  },
  computed: {
    ...mapGetters(['isLoadingMore']),
  },
};
