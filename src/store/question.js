import {
  QuestionService,
  ProfileService,
  AnswerService
} from '@/common/service/api'

import {
  FETCH_ONE_QUESTION_BY_ID,
  FETCH_ANSWER_APPROVAL,
  FETCH_ANSWER_OPPOSE,
  FETCH_PROFILE_ANSWER,
  FETCH_PROFILE_APPROVAL,
  FETCH_PROFILE_OPPOSE,
  FETCH_DELETE_ANSWER,
} from './type/actions'

import {
  FETCH_START,
  FETCH_END,
  SET_ONE_QUESTION,
  SET_ANSWER_APPROVAL,
  SET_ANSWER_OPPOSE,
  SET_PROFILE_ANSWER,
  SET_PROFILE_APPROVAL,
  SET_PROFILE_OPPOSE,
  DELETE_ANSWER,
} from './type/mutations'

const initialState = {
  data: {
    author: {},
    content: {},
    answer: [],
    photoUrls: [],
  },
  profileAnswer: [],
}

const state = { ...initialState }

const actions = {
  async [FETCH_ONE_QUESTION_BY_ID] ({ commit }, questionId) {
    commit(FETCH_START)
    let { data } = await QuestionService.get(questionId)
    data.answer.forEach(item=>{
      item.isApproval = item.isApproval === 'ture'
      item.isOppose = item.isOppose === 'ture'
    })
    commit(FETCH_END)
    commit(SET_ONE_QUESTION, data)
  },
  async [FETCH_ANSWER_APPROVAL] ({ commit }, answerId) {
    await AnswerService.approval(answerId)
    commit(SET_ANSWER_APPROVAL, answerId)
  },
  async [FETCH_ANSWER_OPPOSE] ({ commit }, answerId) {
    await AnswerService.oppose(answerId)
    commit(SET_ANSWER_OPPOSE, answerId)
  },
  async [FETCH_PROFILE_ANSWER] ({ commit }) {
    commit(FETCH_START)
    let { data } = await ProfileService.getAllAnswer()
    data = data.answers
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
  },
  async [FETCH_DELETE_ANSWER] ({ commit }, answerId) {
    await AnswerService.delete(answerId)
    commit(DELETE_ANSWER, answerId)
  },
}

const mutations = {
  [SET_ONE_QUESTION] (state, data) {
    state.data = data
  },
  [SET_ANSWER_APPROVAL] (state, answerId) {
    state.data.answer.forEach(item=>{
      if(item.id === answerId) {
        if (!item.isApproval) {
          item.approvalNum++
          item.isApproval = true
        } else {
          item.approvalNum--
          item.isApproval = false
        }
      }
    })
  },
  [SET_ANSWER_OPPOSE] (state, answerId) {
    state.data.answer.forEach(item=>{
      if(item.id === answerId) {
        if (!item.isOppose) {
          item.opposeNum++
          item.isOppose = true
        } else {
          item.opposeNum--
          item.isOppose = false
        }
      }
    })
  },
  [SET_PROFILE_ANSWER] (state, data) {
    state.profileAnswer = data
  },
  [SET_PROFILE_APPROVAL] (state, data) {
    state.profileAnswer = data
  },
  [SET_PROFILE_OPPOSE] (state, data) {
    state.profileAnswer = data
  },
  [DELETE_ANSWER] (state, answerId) {
    state.profileAnswer = state.profileAnswer.filter(item => item.ansId !== answerId)
  },
}

const getters = {
  oneQuestion(state) {
    return state.data
  },
  profileAnswer(state) {
    return state.profileAnswer
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}