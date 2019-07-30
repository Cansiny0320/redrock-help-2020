import {
  QuestionService,
} from '@/common/service/api'

import {
  FETCH_QUESTION_NEW,
} from './type/actions'

import {
  FETCH_START,
  SET_QUESTION_NEW,
} from './type/mutations'

const initialState = {
  isLoading: false,
  data: [],
}

const state = { ...initialState }

const actions = {
  async [FETCH_QUESTION_NEW] ({ commit }) {
    commit(FETCH_START)
    const { data } = await QuestionService.new()
    commit(SET_QUESTION_NEW, data)
  }
}

const mutations = {
  [FETCH_START] (state) {
    state.isLoading = true
  },
  [SET_QUESTION_NEW] (state, data) {
    state.data = data
    state.isLoading = false
  }
}

const getters = {
  questionNew(state) {
    return state.data
  },
  isLoadingQuestionNew(state) {
    return state.isLoading
  },
}

export default {
  state,
  actions,
  mutations,
  getters
};