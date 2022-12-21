import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import UserList from'../views/userlist'
import UserProfile from'../views/UserProfile'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/userlist',
    name: 'userlist',
    component: UserList
  },
  {
    path: '/Userprofile',
    name: 'Userprofile',
    component: UserProfile
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
