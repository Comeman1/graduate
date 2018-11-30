import Vue from 'vue'
import Router from 'vue-router'
import Book from '@/components/Book'
import signUp from '@/components/signUp'
import index from '@/components/index'
import Community from '@/components/Community'
import startPrice from '@/components/startPrice'
import loginframe from '@/components/loginframe'
import register from '@/components/register'
import mesCenter from '@/components/mesCenter'
import lo from '@/components/Login'
import Mypro from '@/components/Mypro'
import more from '@/components/more'
import Lopro from '@/components/lookotherprojects'
import projectdetails from '@/components/projectdetails'
import volunteer from '@/components/regCom/volunteer'
import special from '@/components/special/special'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/Book',
      name: 'Book',
      component: Book
    },
    {
      path: '/siup',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/com',
      name: 'Community',
      component: Community
    },
    {
      path: '/startPrice',
      name: 'startPrice',
      component: startPrice
    },
    {
      path: '/login',
      name: 'loginframe',
      component: loginframe
    },
    {
      path: '/reg',
      name: 'register',
      component: register
    },
    {
      path: '/mes',
      name: 'mesCenter',
      component: mesCenter
    },
    {
      path: '/lo',
      name: 'lo',
      component: lo
    },
    {
      path: '/Mypro',
      name: 'Mypro',
      component: Mypro
    },
    {
      path: '/volunteer',
      name: 'volunteer',
      component: volunteer
    },
    {
      path: '/projectdetails',
      name: 'projectdetails',
      component: projectdetails
    },
    {
      path: '/more',
      name: 'more',
      component: more
    },
    {
      path: '/Lopro',
      name: 'Lopro',
      component: Lopro
    },
    {
      path: '/special',
      name: 'special',
      component: special
    }
  ]
})
