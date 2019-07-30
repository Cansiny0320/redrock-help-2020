import Vue from 'vue'
import Vuex from 'vuex'

import loading from './loading'
import searchHot from './searchHot'
import qustion from './question'
import tagHot from './tagHot'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loading,
    searchHot,
    qustion,
    tagHot,
  }
})
