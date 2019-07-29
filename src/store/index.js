import Vue from 'vue'
import Vuex from 'vuex'

import searchHot from './searchHot'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    searchHot,
  }
})
