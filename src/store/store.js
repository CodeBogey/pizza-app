import  Vue from 'vue'
import  Vuex from 'vuex'
// import * as actions from './actions.js'
// import * as getters from './getters.js'
// import * as mutations from './mutations.js'

import  menu from './module/menu.js'
import  users from './module/users.js'
import  status from './module/status.js'

Vue.use(Vuex)

export  const store = new Vuex.Store({
       modules:{
         menu,
         users,
         status
       }
})
