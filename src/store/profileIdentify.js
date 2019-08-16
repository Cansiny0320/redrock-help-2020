import {
  ProfileService,
} from '@/common/service/api'

import {
  FETCH_PROFILE_IDENTITY,
} from './type/actions'

import {
  FETCH_START,
  FETCH_END,
  SET_PROFILE_IDENTITY,
} from './type/mutations'

const initialState = {
  data: {
    author: {
      avatar: '',
      name: '',
    },
    number: {
      approvalNum: '',
      opposeNum: '',
    }
  },
}

const state = { ...initialState }

const actions = {
  async [FETCH_PROFILE_IDENTITY]({ commit }) {
    commit(FETCH_START)
    try {
      const { data } = await ProfileService.identify()
      commit(FETCH_END)
      commit(SET_PROFILE_IDENTITY, data)
    } catch (error) {
      commit(FETCH_END)
    }
  }
}

const mutations = {
  [SET_PROFILE_IDENTITY](state, data) {
    state.data = data
  }
}

const getters = {
  profileIdentity(state) {
    return state.data
  },
}

export default {
  state,
  actions,
  mutations,
  getters
};