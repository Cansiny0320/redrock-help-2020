import {
  QuestionService,
} from '@/common/service/api'

import {

  FETCH_PROFILE_COMMENT
} from './type/actions'

import {
  FETCH_START,
  FETCH_END,

  SET_PROFILE_COMMENT,

} from './type/mutations'



const initialState = {
  data: [],
}

const state = { ...initialState }

const actions = {
  async [FETCH_PROFILE_COMMENT]({ commit }) {
    commit(FETCH_START)
    const { data } = await QuestionService.getNew()
    commit(FETCH_END)
    commit(SET_PROFILE_COMMENT, data)
  },
}

const mutations = {
  [SET_PROFILE_COMMENT](state, data) {
    state.data = data
  },
}

const getters = {
  commentNewList(state) {
    return state.data
  },
}


export default {
  state,
  actions,
  mutations,
  getters
}
