import {
  SET_TOAST_SHOW,
  SET_TOAST_CLOSE,
  SET_TOAST_MASSAGE,
} from '@/store/type/mutations'

const initialState = {
  isShow: false,
  massage: '',
}

const state = { ...initialState }

const mutations = {
  [SET_TOAST_SHOW] (state) {
    state.isShow = true
  },
  [SET_TOAST_CLOSE] (state) {
    state.isShow = false
  },
  [SET_TOAST_MASSAGE] (state, massage) {
    state.massage = massage
  },
}

const getters = {
  toastIsShow(state) {
    return state.isShow
  },
  toastMassage(state) {
    return state.massage
  },
}

export default {
  state,
  mutations,
  getters,
}