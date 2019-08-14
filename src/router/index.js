import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import HomeHot from '@/views/HomeHot.vue'
import HomeNew from '@/views/HomeNew.vue'
import HomeTag from '@/views/HomeTag.vue'
import Search from '@/views/Search.vue'
import Profile from '@/views/Profile.vue'
import ProfileQuestion from '@/views/ProfileQuestion.vue'
import ProfileAnswer from '@/views/ProfileAnswer.vue'
import QuestionEdit from '@/views/QuestionEdit.vue'
import AnswerEdit from '@/views/AnswerEdit.vue'
import Question from '@/views/Question.vue'

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
          component: HomeNew,
        },
      ]
    },
    {
      path: '/tag',
      name: 'homeTag',
      component: HomeTag,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/profile/question',
      name: 'profileQuestion',
      component: ProfileQuestion,
    },
    {
      path: '/profile/answer',
      name: 'profileAnswer',
      component: ProfileAnswer,
    },
    {
      path: '/questionEdit',
      name: 'questionEdit',
      component: QuestionEdit,
    },
    {
      path: '/answserEdit',
      name: 'answserEdit',
      component: AnswerEdit,
    },
    {
      path: '/question',
      name: 'question',
      component: Question,
    },
  ]
})
