import { createRouter, createWebHistory } from 'vue-router'
import WebcamView from '../views/WebcamView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'webcam',
      component: WebcamView
    },
    {
      path: '/synthae',
      name: 'synthae',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SynthaeView.vue')
    }
  ]
})

export default router
