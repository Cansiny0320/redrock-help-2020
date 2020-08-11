import { ProfileService } from '@/common/service/api';

import { FETCH_PROFILE_IDENTITY } from './type/actions';

import {
  FETCH_START,
  FETCH_END,
  SET_PROFILE_IDENTITY,
  SET_HAS_NEW,
} from './type/mutations';

const initialState = {
  data: {
    author: {
      id: 0,
      stuNum: 0,
      nickname: '',
      name: '昵称',
      gender: '是',
      avatar: '',
      role: 0,
      createdAt: '',
      updatedAt: null,
      questionsNum: 0,
      answersNum: 0,
      newAnswersNum: 0,
    },
    number: {
      opposeNum: 0,
      approvalNum: 0,
    },
  },
};

const state = { ...initialState, hasNew: false };

const actions = {
  async [FETCH_PROFILE_IDENTITY]({ commit }) {
    commit(FETCH_START);
    try {
      const { data } = await ProfileService.identify();
      commit(FETCH_END);
      commit(SET_PROFILE_IDENTITY, data);
      if (localStorage.getItem('role') === 1 && data.number.newNum) {
        commit(SET_HAS_NEW, true);
      }
    } catch (error) {
      commit(FETCH_END);
    }
  },
};

const mutations = {
  [SET_PROFILE_IDENTITY](state, data) {
    state.data = data;
  },
  [SET_HAS_NEW](state, hasNew) {
    state.hasNew = hasNew;
  },
};

const getters = {
  profileIdentity(state) {
    return state.data;
  },
  hasNew(state) {
    return state.hasNew;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
