import {
  QuestionService,
  ProfileService,
  AnswerService,
} from '@/common/service/api';

import {
  FETCH_ONE_QUESTION_BY_ID,
  FETCH_ANSWER_APPROVAL,
  FETCH_PROFILE_ANSWER,
  FETCH_PROFILE_COMMENT,
  FETCH_PROFILE_APPROVAL,
  FETCH_DELETE_ANSWER,
} from './type/actions';

import {
  FETCH_START,
  FETCH_END,
  SET_ONE_QUESTION,
  SET_ANSWER_APPROVAL,
  SET_PROFILE_ANSWER,
  SET_PROFILE_APPROVAL,
  SET_PROFILE_OPPOSE,
  DELETE_ANSWER,
  SET_PROFILE_COMMENT,
} from './type/mutations';

const initialState = {
  data: {
    author: {},
    content: {},
    answer: [],
    photoUrls: [],
  },
  profileAnswer: [],
  profileComment: [],
  profileApproval: [],
};

const state = { ...initialState };

const actions = {
  async [FETCH_ONE_QUESTION_BY_ID]({ commit }, questionId) {
    commit(FETCH_START);
    let { data } = await QuestionService.get(questionId);
    commit(FETCH_END);
    commit(SET_ONE_QUESTION, data);
  },
  async [FETCH_ANSWER_APPROVAL]({ commit }, answerId) {
    await AnswerService.approval(answerId);
    commit(SET_ANSWER_APPROVAL, answerId);
  },
  async [FETCH_PROFILE_ANSWER]({ commit }) {
    commit(FETCH_START);
    let { data } = await ProfileService.getAllAnswer();
    commit(FETCH_END);
    commit(SET_PROFILE_ANSWER, data.answer);
  },
  async [FETCH_PROFILE_APPROVAL]({ commit }) {
    commit(FETCH_START);
    let { data } = await ProfileService.getApprovalAnswer();
    commit(FETCH_END);
    commit(SET_PROFILE_APPROVAL, data.answer);
  },
  async [FETCH_PROFILE_COMMENT]({ commit }) {
    commit(FETCH_START);
    let { data } = await ProfileService.getComment();
    commit(FETCH_END);
    commit(SET_PROFILE_COMMENT, data.answer);
  },
  async [FETCH_DELETE_ANSWER]({ commit }, answerId) {
    await AnswerService.delete(answerId);
    commit(DELETE_ANSWER, answerId);
  },
};

const mutations = {
  [SET_ONE_QUESTION](state, data) {
    state.data = data;
  },
  [SET_ANSWER_APPROVAL](state, answerId) {
    state.data.answer.forEach(item => {
      if (item.id === answerId) {
        if (!JSON.parse(item.isApproval)) {
          item.approvalNum++;
          item.isApproval = true;
        } else {
          item.approvalNum--;
          item.isApproval = false;
        }
      }
    });
  },
  [SET_PROFILE_ANSWER](state, data) {
    state.profileAnswer = data;
  },
  [SET_PROFILE_APPROVAL](state, data) {
    state.profileApproval = data;
  },
  [SET_PROFILE_OPPOSE](state, data) {
    state.profileAnswer = data;
  },
  [SET_PROFILE_COMMENT](state, data) {
    state.profileComment = data;
  },
  [DELETE_ANSWER](state, answerId) {
    state.profileAnswer = state.profileAnswer.filter(
      item => item.ansId !== answerId,
    );
  },
};

const getters = {
  oneQuestion(state) {
    return state.data;
  },
  profileAnswer(state) {
    return state.profileAnswer;
  },
  profileComment(state) {
    return state.profileComment;
  },
  profileApproval(state) {
    return state.profileApproval;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
