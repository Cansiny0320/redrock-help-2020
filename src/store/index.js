import Vue from 'vue';
import Vuex from 'vuex';

import loading from './loading';
import qustionList from './questionList';
import tagHot from './tagHot';
import profileIdentity from './profileIdentify';
import qustion from './question';
import edit from './edit';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    loading,
    qustionList,
    qustion,
    tagHot,
    profileIdentity,
    edit,
  },
});
