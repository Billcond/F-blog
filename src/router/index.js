import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home"
import Frontend from "../views/subviews/Frontend"
import Afterend from "../views/subviews/Afterend"
import Life from "../views/subviews/Other"
import Messageboard from "../views/subviews/Messageboard"
import Neighbor from "../views/subviews/Neighbor"
import SubViewTemplate from "../views/subviews/SubviewTemplate"
import Frame from "../views/subviews/Frame"
import Article from "../views/subviews/Article"
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
      
    ]
  },
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
    path:'/fblog/frame',
    name:"Frame",
    component:Frame,
  },
  {
    path:'/fblog/other',
    name:"Other",
    component:Life,
  }
  ,{
    path:'/fblog/neighbor',
    name:"Neighbor",
    component:Neighbor
  },
  {
    path:'/fblog/messageboard',
    name:"Messageboard",
    component:Messageboard
  },
  {
    path:"/fblog/article",
    name:"Article",
    component:Article
  }
]

const router = new VueRouter({
  routes
})

export default router
