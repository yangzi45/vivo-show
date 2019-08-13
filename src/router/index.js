import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home/home'
import Classies from '@/view/classies/Classies'
import goodDetail from '@/view/detail/goodDetail'
import Choose from '@/view/choose'
import Part from '@/view/part'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/Home',
      name: 'home',
      component: Home
    },{
      path:'/classies',
      name:'classies',
      component:Classies
    },{
      path:'/goodDetail',
      name:'goodDetail',
      component:goodDetail
    },{
      path:'/Choose',
      name:'choose',
      component:Choose
    },{
      path:'/Part',
      name:'part',
      component:Part
    }
  ]
})
