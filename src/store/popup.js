import {
  SET_POPUP_SHOW,
  SET_POPUP_CLOSE,
  SET_POPUP_MASSAGE,
} from '@/store/type/mutations'

const initialState = {
  isShow: false,
  massage: '',
}

const state = { ...initialState }

const mutations = {
  [SET_POPUP_SHOW] (state) {
    state.isShow = true
  },
  [SET_POPUP_CLOSE] (state) {
    state.isShow = false
  },
  [SET_POPUP_MASSAGE] (state, massage) {
    state.massage = massage
  },
}

const getters = {
  popupIsShow(state) {
    return state.isShow
  },
  popupMassage(state) {
    return state.massage
  },
}

export default {
  state,
  mutations,
  getters,
}