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
    component:SubViewTemplate,
  },
  {
    path:'/fblog/afterend',
    name:"Afterend",
    component:SubViewTemplate,
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
  },{
    path:'/fblog/messageboard',
    name:"Messageboard",
    component:Messageboard
  },
]

const router = new VueRouter({
  routes
})

export default router
