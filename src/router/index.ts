import { createRouter, createWebHistory } from 'vue-router'
import MovieList from '../components/MovieList.vue'
import MovieDetail from '../components/MovieDetail.vue'

const routes = [
  {
    path: '/',
    redirect: '/movies',
  },
  {
    path: '/movies',
    name: 'MovieList',
    component: MovieList,
  },
  {
    path: '/movies/:title',
    name: 'MovieDetail',
    component: MovieDetail,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
