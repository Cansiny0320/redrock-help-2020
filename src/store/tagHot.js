import { TagService } from '@/common/service/api';

import { FETCH_TAG_HOT } from './type/actions';

import { FETCH_START, FETCH_END, SET_TAG_HOT } from './type/mutations';

const initialState = {
  data: [],
};

const state = { ...initialState };

const actions = {
  async [FETCH_TAG_HOT]({ commit, state }) {
    let hotData;
    if (!state.data.length) {
      commit(FETCH_START);
      let { data } = await TagService.hot();
      data = data.map(item => ({
        id: item.id,
        label: item.label,
      }));
      commit(FETCH_END);
      hotData = data;
    } else {
      hotData = state.data;
    }
    commit(SET_TAG_HOT, hotData);
  },
};

const mutations = {
  [SET_TAG_HOT](state, data) {
    state.data = data;
  },
};

const getters = {
  tagHot(state) {
    return state.data;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
