import {
    QuestionService,
  } from '@/common/service/api'
  
  import {
   FETCH_PROFILE_QUESTION
  } from './type/actions'
  
  import {
    FETCH_START,
    FETCH_END,
    SET_PROFILE_QUESTION,
  } from './type/mutations'
  
  const initialState = {
    data: [],
  }
  
  const state = { ...initialState }
  
  const actions = {
    async [FETCH_PROFILE_QUESTION] ({ commit }) {
      commit(FETCH_START)
      const { data } = await QuestionService.get()
      commit(FETCH_END)
      commit(SET_PROFILE_QUESTION, data)
    },
  }
  
  const mutations = {
    [SET_PROFILE_QUESTION] (state, data) {
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