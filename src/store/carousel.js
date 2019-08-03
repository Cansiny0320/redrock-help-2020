import {
  SET_CAROUSEL_URL,
  SET_CAROUSEL_SHOW,
  SET_CAROUSEL_CLOSE
} from './type/mutations'

const initialState = {
  isShow: false,
  imagesUrl: [],
}

const state = { ...initialState }

const mutations = {
  [SET_CAROUSEL_SHOW] (state) {
    state.isShow = true
  },
  [SET_CAROUSEL_CLOSE] (state) {
    state.isShow = false
  },
  [SET_CAROUSEL_URL] (state, imagesUrl) {
    state.imagesUrl = imagesUrl
  }
}

const getters = {
  carouselImagesUrl(state) {
    return state.imagesUrl
  },
  carouselIsShow(state) {
    return state.isShow
  },
}

export default {
  state,
  mutations,
  getters
};