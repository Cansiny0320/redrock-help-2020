import Vue from 'vue'
import Vuex from 'vuex'

import loading from './loading'
import searchHot from './searchHot'
import qustionList from './questionList'
import tagHot from './tagHot'
import profileIdentity from './profileIdentify'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loading,
    searchHot,
    qustionList,
    tagHot,
    profileIdentity
  }
})
