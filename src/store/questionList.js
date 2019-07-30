import {
  QuestionService,
} from '@/common/service/api'

import {
  FETCH_QUESTION_HOT,
  FETCH_QUESTION_NEW,
  FETCH_QUESTION_BY_TAG,
} from './type/actions'

import {
  FETCH_START,
  FETCH_END,
  SET_QUESTION_LIST,
} from './type/mutations'

const initialState = {
  data: [],
}

const state = { ...initialState }

const actions = {
  async [FETCH_QUESTION_HOT] ({ commit }) {
    commit(FETCH_START)
    const { data } = await QuestionService.hot()
    commit(FETCH_END)
    commit(SET_QUESTION_LIST, data)
  },
  async [FETCH_QUESTION_NEW] ({ commit }) {
    commit(FETCH_START)
    const { data } = await QuestionService.new()
    commit(FETCH_END)
    commit(SET_QUESTION_LIST, data)
  },
  async [FETCH_QUESTION_BY_TAG] ({commit}, tagId) {
    commit(FETCH_START)
    const { data } = await QuestionService.tag(tagId)
    commit(FETCH_END)
    commit(SET_QUESTION_LIST, data)
  }
}

const mutations = {
  [SET_QUESTION_LIST] (state, data) {
    state.data = data
  },
}

const getters = {
  questionList(state) {
    return state.data
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}