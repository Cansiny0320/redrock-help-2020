import Vue from 'vue'
import Vuex from 'vuex'

import searchHot from './searchHot'
import qustionHot from './questionHot'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    searchHot,
    qustionHot
  }
})
