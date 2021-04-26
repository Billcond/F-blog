import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home"
import Frontend from "../components/Frontend"
import Afterend from "../components/Afterend"
import Life from "../components/Life"
import Messageboard from "../components/Messageboard"
import Neighbor from "../components/Neighbor"
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/fblog/home'
  }
  ,
  {
    path: '/fblog/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'/fblog/frontend',
        name:'Frontend',
        component:Frontend,
      },
      {
        path:'/fblog/afterend',
        name:"Afterend",
        component:Afterend,
      },
      {
        path:'/fblog/life',
        name:"Life",
        component:Life,
      },{
        path:'/fblog/neighbor',
        name:"Neighbor",
        component:Neighbor
      },{
        path:'/fblog/messageboard',
        name:"Messageboard",
        component:Messageboard
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
