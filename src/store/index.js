import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'
import storage from './storage'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
  plugins: [createPersistedState({
    storage
  })]
})