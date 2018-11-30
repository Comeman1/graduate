import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mine from '@/components/mine/mine'
import navbar from '@/components/navbar'
// 关注模块
import foucs from '@/components/foucs'

import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/mine',
      name:'mine',
      component:mine
    },
    {
      path:'/nav',
      name:'navbar',
      component:navbar
    },
    {
      path:'/foucs',
      name:'foucs',
      component:foucs
    },
    {
      path:'/login',
      name:'login',
      component:login
    }
  ]
})
