import {
    QuestionService,
  } from '@/common/service/api'
  
  import {
   FETCH_PROFILE_ANSWER,
   FETCH_PROFILE_APPROVAL,
   FETCH_PROFILE_OPPOSE,

  } from './type/actions'
  
  import {
    FETCH_START,
    FETCH_END,
    SET_PROFILE_ANSWER,
    SET_PROFILE_APPROVAL,
    SET_PROFILE_OPPOSE
  } from './type/mutations'
  
  

  const initialState = {
    data: [],
  }

  const state = { ...initialState }

  const actions = {
    async [FETCH_PROFILE_ANSWER] ({ commit }) {
      commit(FETCH_START)
      const { data } = await QuestionService.getOld()
      commit(FETCH_END)
      commit(SET_PROFILE_ANSWER, data)
    },
  }

  const mutations = {
    [SET_PROFILE_ANSWER] (state, data) {
      state.data = data
    },
  }
  
  const getters = {
    answerOldList(state) {
      return state.data
    },
  }


  export default {
    state,
    actions,
    mutations,
    getters
  }
  