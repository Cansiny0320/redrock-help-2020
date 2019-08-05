import Vue from 'vue'
import Vuex from 'vuex'

import loading from './loading'
import searchHot from './searchHot'
import qustionList from './questionList'
import tagHot from './tagHot'
import profileIdentity from './profileIdentify'
import qustion from './question'
import profileData from './profileData'
import edit from './edit'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loading,
    searchHot,
    qustionList,
    qustion,
    tagHot,
    profileIdentity,
    profileData,
    edit,
  }
})
