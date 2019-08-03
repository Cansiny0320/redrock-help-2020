import {
  QuestionService,
} from '@/common/service/api'

import {
  FETCH_ONE_QUESTION_BY_ID,
  FETCH_ANSWER_APPROVAL,
  FETCH_ANSWER_OPPOSE,
} from './type/actions'

import {
  FETCH_START,
  FETCH_END,
  SET_ONE_QUESTION,
  SET_ANSWER_APPROVAL,
  SET_ANSWER_OPPOSE,
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
    const { data } = await QuestionService.get(questionId)
    commit(FETCH_END)
    commit(SET_ONE_QUESTION, data)
  },
  async [FETCH_ANSWER_APPROVAL] ({ commit }, answerId) {
    await QuestionService.approval(answerId)
    commit(SET_ANSWER_APPROVAL, answerId)
  },
  async [FETCH_ANSWER_OPPOSE] ({ commit }, answerId) {
    await QuestionService.oppose(answerId)
    commit(SET_ANSWER_OPPOSE, answerId)
  },
}

const mutations = {
  [SET_ONE_QUESTION] (state, data) {
    state.data = data
  },
  [SET_ANSWER_APPROVAL] (state, answerId) {
    state.data.answer.forEach(item=>{
      if(item.id === answerId) {
        item.approvalNum++
        item.isApproval = true
      }
    })
  },
  [SET_ANSWER_OPPOSE] (state, answerId) {
    state.data.answer.forEach(item=>{
      if(item.id === answerId) {
        item.opposeNum++
        item.isOppose = true
      }
    })
  }
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