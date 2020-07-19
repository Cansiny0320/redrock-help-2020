import Vue from 'vue';
import Router from 'vue-router';

import ga from 'vue-ga';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home.vue'),
      children: [
        {
          path: '',
          name: 'homeHot',
          component: () => import('@/views/HomeHot.vue'),
        },
        {
          path: 'new',
          name: 'homeNew',
          component: () => import('@/views/HomeNew.vue'),
        },
      ],
    },
    {
      path: '/tag',
      name: 'homeTag',
      component: () => import('@/views/HomeTag.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/Search.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/Profile.vue'),
    },
    {
      path: '/profile/question',
      name: 'profileQuestion',
      component: () => import('@/views/ProfileQuestion.vue'),
    },
    {
      path: '/profile/answer',
      name: 'profileAnswer',
      component: () => import('@/views/ProfileAnswer.vue'),
    },
    {
      path: '/questionEdit',
      name: 'questionEdit',
      component: () => import('@/views/QuestionEdit.vue'),
    },
    {
      path: '/answserEdit',
      name: 'answserEdit',
      component: () => import('@/views/AnswerEdit.vue'),
    },
    {
      path: '/question',
      name: 'question',
      component: () => import('@/views/Question.vue'),
    },
  ],
});

ga(router, process.env.VUE_APP_GA);

export default router;
