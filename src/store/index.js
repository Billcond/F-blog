import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    atricleType:"",
    allArticles:[],
    javascriptArticles:[],
    cssArticles:[],
    htmlArticles:[],
    nodeArticles:[],
    koaArticles:[],
    vueArticles:[],
    reactArticles:[],
    otherArticles:[],
  },
  mutations: {
    some(name){
      console.log('vuex中的name',name)
    }
  },
  actions: {

  },
  modules: {

  }
})
