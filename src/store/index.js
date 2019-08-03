import Vue from 'vue'
import Vuex from 'vuex'

import loading from './loading'
import searchHot from './searchHot'
import qustionList from './questionList'
import tagHot from './tagHot'
import profileIdentity from './profileIdentify'
import qustion from './question'
import toast from './toast'
import popup from './popup'
import profileQuestion from './profileQuestion'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loading,
    searchHot,
    qustionList,
    qustion,
    tagHot,
    profileIdentity,
    toast,
    popup,
    profileQuestion
  }
})
