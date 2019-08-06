import {
  QuestionService,
  SearchService,
  ProfileService,
} from '@/common/service/api'

import {
  FETCH_QUESTION_HOT,
  FETCH_QUESTION_NEW,
  FETCH_QUESTION_BY_TAG,
  FETCH_QUESTION_BY_SEARCH,
  FETCH_PROFILE_QUESTION,
  FETCH_DELETE_QUESTION,
  FETCH_QUESTION_SOLVE,
} from './type/actions'

import {
  FETCH_START,
  FETCH_END,
  SET_QUESTION_LIST,
  DELETE_QUESTION,
  SET_QUESTION_SOLVE,
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
  },
  async [FETCH_QUESTION_BY_SEARCH] ({commit}, q) {
    commit(FETCH_START)
    const { data } = await SearchService.search(q)
    commit(FETCH_END)
    commit(SET_QUESTION_LIST, data)
  },
  async [FETCH_PROFILE_QUESTION] ({ commit }) {
    commit(FETCH_START)
    const { data } = await ProfileService.getQustion()
    commit(FETCH_END)
    commit(SET_QUESTION_LIST, data)
  },
  async [FETCH_DELETE_QUESTION] ({ commit }, questionId) {
    await QuestionService.delete(questionId)
    commit(DELETE_QUESTION, questionId)
  },
  async [FETCH_QUESTION_SOLVE] ({commit}, questionId) {
    await QuestionService.solve(questionId)
    commit(SET_QUESTION_SOLVE, questionId)
  },
}

const mutations = {
  [SET_QUESTION_LIST] (state, data) {
    state.data = data
  },
  [DELETE_QUESTION] (state, questionId) {
    state.data = state.data.filter(item => item.id !== questionId)
  },
  [SET_QUESTION_SOLVE] (state, questionId) {
    state.data.forEach(item => {
      if(item.id === questionId) {
        item.status = '已解决'
      }
    })
  }
}

const getters = {
  questionList(state) {
    return state.data
  },
  profileQuestion(state) {
    return state.data
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}