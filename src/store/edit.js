import {
  FETCH_PUBLISH_ANSWER,
  FETCH_PUBLISH_QUESTION,
  UPLOAD_IMAGE,
  DLELTE_IMAGE,
} from './type/actions'

import {
  SET_EDIT_IMAGES,
  SET_EDIT_TAGS,
  SET_EDIT_WORDS,
  DELETE_EDIT_IMAGES,
  DELETE_EDIT_TAGS,
  SET_PORGRESSING,
  END_PORGRESSING,
  SET_IMAGE_UPLOADING,
  END_IMAGE_UPLOADING,
} from './type/mutations'
import { QuestionService, AnswerService, ImageService } from '@/common/service/api';

const initialState = {
  words: '',
  tags: [],
  image: [],
  imageId: [],
  isProgressing: false,
  isUploading: false,
}

const state = { ...initialState }

const actions = {
  async [FETCH_PUBLISH_QUESTION] ({ commit, state }) {
    commit(SET_PORGRESSING)
    const { data } = await QuestionService.post({
      content: state.words,
      tags: state.tags.map(item=>{
        return { id: item }
      }),
      photo: state.imageId.map(item=>{
        return { id: item }
      }),
    })
    commit(END_PORGRESSING)
  },
  async [FETCH_PUBLISH_ANSWER] ({ commit, state }, questionId) {
    commit(SET_PORGRESSING)
    const { data } = await AnswerService.post(questionId, {
      content: state.words,
      photo: [],
    })
    commit(END_PORGRESSING)
  },
  async [UPLOAD_IMAGE] ({ commit }, blob) {
    commit(SET_IMAGE_UPLOADING)
    const { data } = await ImageService.post(blob)
    commit(END_IMAGE_UPLOADING)
    commit(SET_EDIT_IMAGES, blob, data.id)
  },
  async [DLELTE_IMAGE] ({ commit, state }, index) {
    await ImageService.delete([state.imageId[index]])
    commit(DELETE_EDIT_IMAGES, index)
  },
}

const mutations = {
  [SET_EDIT_IMAGES] (state, blob, id) {
    state.image.push(blob)
    state.imageId.push(id)
  },
  [DELETE_EDIT_IMAGES] (state, index) {
    state.image.splice(index, 1)
    state.imageId.splice(index, 1)
  },
  [SET_EDIT_TAGS] (state, tagId) {
    state.tags.push(tagId)
  },
  [DELETE_EDIT_TAGS] (state, tagId) {
    state.tags = state.tags.filter(item => item !== tagId)
  },
  [SET_EDIT_WORDS] (state, words) {
    state.words = words
  },
  [SET_IMAGE_UPLOADING] (state) {
    state.isUploading = true
  },
  [END_IMAGE_UPLOADING] (state) {
    state.isUploading = false
  },
  [SET_PORGRESSING] (state) {
    state.isProgressing = true
  },
  [END_PORGRESSING] (state) {
    state.isProgressing = false
    state.words = ''
    state.image = []
    state.tags = []
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
  },
  editProgress() {
    return state.isProgressing
  },
  imageUploading() {
    return state.isUploading
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
}