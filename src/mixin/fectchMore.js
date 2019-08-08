import throttle from '@/common/throttle'

export default {
  data () {
    return {
      throttleFunction: null,
    }
  },
  mounted() {
    this.throttleFunction = throttle(() => {
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight)) {
        this.handelFecthMore();
      }
    }, 100, 200)
    window.addEventListener('scroll', this.throttleFunction, false);
  },
  destroyed () {
    window.removeEventListener('scroll', this.throttleFunction, false);
  }
}