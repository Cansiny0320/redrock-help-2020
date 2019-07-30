import {
  SearchService,
} from '@/common/service/api'

import {
  FETCH_SEARCH_HOT,
} from './type/actions'

import {
  FETCH_START,
  FETCH_END,
  SET_SEARCH_HOT,
} from './type/mutations'

const initialState = {
  data: [],
}

const state = { ...initialState }

const actions = {
  async [FETCH_SEARCH_HOT] ({ commit, state }) {
    let hotData
    if (!state.data.length) {
      commit(FETCH_START)
      const { data } = await SearchService.hot()
      commit(FETCH_END)
      hotData = data
    } else {
      hotData = state.data
    }
    commit(SET_SEARCH_HOT, hotData)
  }
}

const mutations = {
  [SET_SEARCH_HOT] (state, data) {
    state.data = data
    state.isLoading = false
  }
}

const getters = {
  searchHot(state) {
    return state.data
  }
}

export default {
  state,
  actions,
  mutations,
  getters
};