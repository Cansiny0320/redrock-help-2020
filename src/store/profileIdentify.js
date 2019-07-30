import {
  ProfileService,
} from '@/common/service/api'

import {
  FETCH_PROFILE_IDENTITY,
} from './type/actions'

import {
  FETCH_START,
  SET_PROFILE_IDENTITY,
} from './type/mutations'

const initialState = {
  isLoading: false,
  data: {},
}

const state = { ...initialState }

const actions = {
  async [FETCH_PROFILE_IDENTITY]({ commit }) {
    commit(FETCH_START)
    const { data } = await ProfileService.identify()
    commit(SET_PROFILE_IDENTITY, data)
  }
}

const mutations = {
  [FETCH_START](state) {
    state.isLoading = true
  },
  [SET_PROFILE_IDENTITY](state, data) {
    state.data = data
    state.isLoading = false
  }
}

const getters = {
  profileIdentity(state) {
    return state.data
  },
  isLoadingIdentity(state) {
    return state.isLoading
  },
}

export default {
  state,
  actions,
  mutations,
  getters
};