import {
  SearchService,
} from '@/common/service/api'

import {
  FETCH_SEARCH_HOT,
} from './type/actions'

import {
  FETCH_START,
  SET_SEARCH_HOT,
} from './type/mutations'

const initialState = {
  isLoading: false,
  data: [],
}

const state = { ...initialState }

const actions = {
  async [FETCH_SEARCH_HOT] ({ commit }) {
    commit(FETCH_START)
    const { data } = await SearchService.hot()
    commit(SET_SEARCH_HOT, data)
  }
}

const mutations = {
  [FETCH_START] (state) {
    state.isLoading = true
  },
  [SET_SEARCH_HOT] (state, data) {
    state.data = data
    state.isLoading = false
  }
}

const getters = {
  searchHot(state) {
    return state.data
  },
  isLoading(state) {
    return state.isLoading
  },
}

export default {
  state,
  actions,
  mutations,
  getters
};