import {
  QuestionService,
} from '@/common/service/api'

import {
  FETCH_ONE_QUESTION_BY_ID
} from './type/actions'

import {
  FETCH_START,
  FETCH_END,
  SET_ONE_QUESTION,
} from './type/mutations'

const initialState = {
  data: {
    author: {},
    content: {},
    answer: [],
  },
}

const state = { ...initialState }

const actions = {
  async [FETCH_ONE_QUESTION_BY_ID] ({ commit }, questionId) {
    commit(FETCH_START)
    const { data } = await QuestionService.getOne(questionId)
    commit(FETCH_END)
    commit(SET_ONE_QUESTION, data)
  },
}

const mutations = {
  [SET_ONE_QUESTION] (state, data) {
    state.data = data
  },
}

const getters = {
  oneQuestion(state) {
    return state.data
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}