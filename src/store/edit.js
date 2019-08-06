import {
  FETCH_PUBLISH_ANSWER,
  FETCH_PUBLISH_QUESTION,
} from './type/actions'

import {
  SET_EDIT_IMAGES,
  SET_EDIT_TAGS,
  SET_EDIT_WORDS,
  DELETE_EDIT_IMAGES,
  DELETE_EDIT_TAGS,
} from './type/mutations'

const initialState = {
  words: '',
  tags: [],
  image: [],
}

const state = { ...initialState }

const actions = {}

const mutations = {
  [SET_EDIT_IMAGES] (state, base64) {
    state.image.push(base64)
  },
  [DELETE_EDIT_IMAGES] (state, index) {
    state.image.splice(index, 1)
  },
  [SET_EDIT_TAGS] (state, tagId) {
    state.tags.push(tagId)
  },
  [DELETE_EDIT_TAGS] (state, tagId) {
    state.tags = state.tags.filter(item => item !== tagId)
  },
  [SET_EDIT_WORDS] (state, words) {
    state.words = words
  }
}

const getters = {
  editImage() {
    return state.image
  },
  editWord() {
    return state.words
  },
  editTags() {
    return state.tags
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
}