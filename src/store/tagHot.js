import {
  TagService,
} from '@/common/service/api'

import {
  FETCH_TAG_HOT,
} from './type/actions'

import {
  FETCH_START,
  SET_TAG_HOT,
} from './type/mutations'

const initialState = {
  isLoading: false,
  data: [],
}

const state = { ...initialState }

const actions = {
  async [FETCH_TAG_HOT] ({ commit, state }) {
    commit(FETCH_START)
    let hotData
    if (!state.data.length) {
      const { data } = await TagService.hot()
      hotData = data
    } else {
      hotData = state.data
    }
    commit(SET_TAG_HOT, hotData)
  }
}

const mutations = {
  [FETCH_START] (state) {
    state.isLoading = true
  },
  [SET_TAG_HOT] (state, data) {
    state.data = data
    state.isLoading = false
  }
}

const getters = {
  tagHot(state) {
    return state.data
  },
  isLoadingTagHot(state) {
    return state.isLoading
  },
}

export default {
  state,
  actions,
  mutations,
  getters
};