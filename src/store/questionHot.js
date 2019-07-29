import {
    QuestionService,
  } from '@/common/service/api'
  
  import {
    FETCH_QUESTION_HOT,
  } from './type/actions'
  
  import {
    FETCH_START,
    SET_QUESTION_HOT,
  } from './type/mutations'
  
  const initialState = {
    isLoading: false,
    data: [],
  }
  
  const state = { ...initialState }
  
  const actions = {
    async [FETCH_QUESTION_HOT] ({ commit }) {
      commit(FETCH_START)
      const { data } = await QuestionService.hot()
      commit(SET_QUESTION_HOT, data)
    }
  }
  
  const mutations = {
    [FETCH_START] (state) {
      state.isLoading = true
    },
    [SET_QUESTION_HOT] (state, data) {
      state.data = data
      state.isLoading = false
    }
  }
  
  const getters = {
    questionHot(state) {
      return state.data
    },
    isLoading(state) {
      return state.isLoading
    },
  }
  
  export default {
    state,
    actions,
    mutations,
    getters
  };