import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import HomeHot from '@/views/HomeHot.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'homeHot',
          component: HomeHot,
        },
        {
          path: 'new',
          name: 'homeNew',
          component: () => import('@/views/HomeNew.vue')
        },
      ]
    },
    {
      path: '/tag',
      name: 'homeTag',
      component: () => import('@/views/HomeTag.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/Search.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/Profile.vue')
    },
    {
      path: '/questionEdit',
      name: 'questionEdit',
      component: () => import('@/views/QuestionEdit.vue')
    },
    {
      path: '/answserEdit',
      name: 'answserEdit',
      component: () => import('@/views/AnswerEdit.vue')
    },
    {
      path: '/question',
      name: 'question',
      component: () => import('@/views/Question.vue')
    }
  ]
})
