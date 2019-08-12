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
  FETCH_NEXT_HOT_QUESTION,
  FETCH_NEXT_NEW_QUESTION,
  FETCH_NEXT_TAG_QUESTION,
} from './type/actions'

import {
  FETCH_START,
  FETCH_END,
  SET_QUESTION_LIST,
  DELETE_QUESTION,
  SET_QUESTION_SOLVE,
  SET_MORE_QUESTION,
} from './type/mutations'

const initialState = {
  data: [],
  page: 1,
  noMore: false,
  prePage: 10,
}

const state = { ...initialState }

const actions = {
  async [FETCH_QUESTION_HOT] ({ commit }) {
    commit(FETCH_START)
    const { data } = await QuestionService.hot()
    commit(FETCH_END)
    commit(SET_QUESTION_LIST, data)
  },
  async [FETCH_NEXT_HOT_QUESTION] ({ commit, state }) {
    if (!state.noMore) {
      const { data } = await QuestionService.hot(state.page + 1)
      commit(SET_MORE_QUESTION, data)
    }
  },
  async [FETCH_NEXT_NEW_QUESTION] ({ commit, state }) {
    const { data } = await QuestionService.new()
    commit(SET_MORE_QUESTION, data)
  },
  async [FETCH_QUESTION_NEW] ({ commit }) {
    commit(FETCH_START)
    const { data } = await QuestionService.new()
    commit(FETCH_END)
    commit(SET_QUESTION_LIST, data)
  },
  async [FETCH_QUESTION_BY_TAG] ({ commit }, tagId) {
    commit(FETCH_START)
    const { data } = await QuestionService.tag(tagId)
    commit(FETCH_END)
    commit(SET_QUESTION_LIST, data)
  },
  async [FETCH_NEXT_TAG_QUESTION] ({ commit }, tagId) {
    const { data } = await QuestionService.tag()
    commit(SET_MORE_QUESTION, data)
  },
  async [FETCH_QUESTION_BY_SEARCH] ({ commit }, q) {
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
  async [FETCH_QUESTION_SOLVE] ({ commit }, questionId) {
    await QuestionService.solve(questionId)
    commit(SET_QUESTION_SOLVE, questionId)
  },
}

const mutations = {
  [SET_QUESTION_LIST] (state, data) {
    state.data = data
    state.noMore = false
  },
  [SET_MORE_QUESTION] (state, data) {
    state.data = [...state.data, ...data]
    state.page = state.page + 1
    // console.log(state.noMore)
    if (data.length < state.prePage) {
      state.noMore = true
    }
  },
  [DELETE_QUESTION] (state, questionId) {
    state.data = state.data.filter(item => item.id !== questionId)
  },
  [SET_QUESTION_SOLVE] (state, questionId) {
    state.data.forEach(item => {
      if (item.id === questionId) {
        item.status = '已解决'
      }
    })
  }
}

const getters = {
  questionList (state) {
    return state.data
  },
  profileQuestion (state) {
    return state.data
  },
  questionListNoMore (state) {
    return state.noMore
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}