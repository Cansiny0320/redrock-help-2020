import {
  ProfileService,
} from '@/common/service/api'

import {
  FETCH_PROFILE_QUESTION,
  FETCH_PROFILE_ANSWER,
  FETCH_PROFILE_APPROVAL,
  FETCH_PROFILE_OPPOSE,
} from './type/actions'

import {
  FETCH_START,
  FETCH_END,
  SET_PROFILE_QUESTION,
  SET_PROFILE_ANSWER,
  SET_PROFILE_APPROVAL,
  SET_PROFILE_OPPOSE,
} from './type/mutations'

const initialState = {
  answer: [],
  question: [],
}

const state = { ...initialState }

const actions = {
  async [FETCH_PROFILE_QUESTION] ({ commit }) {
    commit(FETCH_START)
    const { data } = await ProfileService.getQustion()
    commit(FETCH_END)
    commit(SET_PROFILE_QUESTION, data)
  },
  async [FETCH_PROFILE_ANSWER] ({ commit }) {
    commit(FETCH_START)
    const { data } = await ProfileService.getAllAnswer()
    commit(FETCH_END)
    commit(SET_PROFILE_ANSWER, data)
  },
  async [FETCH_PROFILE_APPROVAL] ({ commit }) {
    commit(FETCH_START)
    const { data } = await ProfileService.getApprovalAnswer()
    commit(FETCH_END)
    commit(SET_PROFILE_APPROVAL, data)
  },
  async [FETCH_PROFILE_OPPOSE] ({ commit }) {
    commit(FETCH_START)
    const { data } = await ProfileService.getOpposeAnswer()
    commit(FETCH_END)
    commit(SET_PROFILE_OPPOSE, data)
  }
}

const mutations = {
  [SET_PROFILE_QUESTION] (state, data) {
    state.question = data
  },
  [SET_PROFILE_ANSWER] (state, data) {
    state.answer = data
  },
  [SET_PROFILE_APPROVAL] (state, data) {
    state.answer = data
  },
  [SET_PROFILE_OPPOSE] (state, data) {
    state.answer = data
  },
}

const getters = {
  profileAnswer(state) {
    return state.answer
  },
  profileQuestion(state) {
    return state.question
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}