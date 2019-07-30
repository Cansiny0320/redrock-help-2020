import {
  QuestionService,
} from '@/common/service/api'

import {
  FETCH_QUESTION_HOT,
  FETCH_QUESTION_NEW,
} from './type/actions'

import {
  FETCH_START,
  FETCH_END,
  SET_QUESTION_HOT,
  SET_QUESTION_NEW,
} from './type/mutations'

const initialState = {
  data: [],
}

const state = { ...initialState }

const actions = {
  async [FETCH_QUESTION_HOT] ({ commit }, tagId) {
    commit(FETCH_START)
    const { data } = await QuestionService.hot(tagId)
    commit(FETCH_END)
    commit(SET_QUESTION_HOT, data)
  },
  async [FETCH_QUESTION_NEW] ({ commit }) {
    commit(FETCH_START)
    const { data } = await QuestionService.new()
    commit(FETCH_END)
    commit(SET_QUESTION_NEW, data)
  }
}

const mutations = {
  [SET_QUESTION_HOT] (state, data) {
    state.data = data
  },
  [SET_QUESTION_NEW] (state, data) {
    state.data = data
  }
}

const getters = {
  questionHot(state) {
    return state.data
  },
  questionNew(state) {
    return state.data
  },
}

export default {
  state,
  actions,
  mutations,
  getters
};