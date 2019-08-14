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
  SET_PROFILE_QUESTION_LIST,
  SET_LOADING_MORE,
  END_LOADING_MORE,
} from './type/mutations'

const initialState = {
  data: [],
  profileData: [],
  page: 1,
  noMore: false,
  prePage: 10,
  isLoadingMore: false,
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
      commit(SET_LOADING_MORE)
      const { data } = await QuestionService.hot(state.page + 1)
      commit(END_LOADING_MORE)
      commit(SET_MORE_QUESTION, data)
    }
  },
  async [FETCH_NEXT_NEW_QUESTION] ({ commit, state }) {
    if (!state.noMore) {
      commit(SET_LOADING_MORE)
      const { data } = await QuestionService.new(state.page + 1)
      commit(END_LOADING_MORE)
      commit(SET_MORE_QUESTION, data)
    }
  },
  async [FETCH_QUESTION_NEW] ({ commit }) {
    commit(FETCH_START)
    const { data } = await QuestionService.new()
    commit(FETCH_END)
    commit(SET_QUESTION_LIST, data)
  },
  async [FETCH_QUESTION_BY_TAG] ({ commit }, tagId) {
    commit(FETCH_START)
    let { data } = await QuestionService.tag(tagId)
    data = data.map(item => {
      item.value.answersCount = item.value.author.answersCount
      delete item.value.author.answersCount
      return item.value
    })
    commit(FETCH_END)
    commit(SET_QUESTION_LIST, data)
  },

  async [FETCH_NEXT_TAG_QUESTION] ({ commit, state }, tagId) {
    if (!state.noMore) {
      commit(SET_LOADING_MORE)
      let { data } = await QuestionService.tag(tagId, state.page + 1)
      commit(END_LOADING_MORE)
      data = data.map(item => {
        return item.value
      })
      commit(SET_MORE_QUESTION, data)
    }
  },
  async [FETCH_QUESTION_BY_SEARCH] ({ commit }, q) {
    commit(FETCH_START)
    let { data } = await SearchService.search(q)
    data = data.map(item => {
      item.value.answersCount = item.value.author.answersCount
      delete item.value.author.answersCount
      return item.value
    })
    commit(FETCH_END)
    commit(SET_QUESTION_LIST, data)
  },
  async [FETCH_PROFILE_QUESTION] ({ commit }) {
    commit(FETCH_START)
    const { data } = await ProfileService.getQustion()
    commit(FETCH_END)
    commit(SET_PROFILE_QUESTION_LIST, data)
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
    state.page = 1
  },
  [SET_PROFILE_QUESTION_LIST] (state, data) {
    state.profileData = data
    state.noMore = false
    state.page = 1
  },
  [SET_MORE_QUESTION] (state, data) {
    state.data = [...state.data, ...data]
    state.page = state.page + 1
    if (data.length < state.prePage) {
      state.noMore = true
    }
  },
  [DELETE_QUESTION] (state, questionId) {
    state.profileData = state.profileData.filter(item => item.id !== questionId)
  },
  [SET_QUESTION_SOLVE] (state, questionId) {
    state.profileData.forEach(item => {
      if (item.id === questionId) {
        item.status = '已解决'
      }
    })
  },
  [SET_LOADING_MORE] (state) {
    state.isLoadingMore = true
  },
  [END_LOADING_MORE] (state) {
    state.isLoadingMore = false
  }
}

const getters = {
  questionList (state) {
    return state.data
  },
  profileQuestion (state) {
    return state.profileData
  },
  questionListNoMore (state) {
    return state.noMore
  },
  isLoadingMore(state) {
    return state.isLoadingMore
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}