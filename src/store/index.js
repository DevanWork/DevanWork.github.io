import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navbar: {
      page: "Home",
    }
  },
  getters: {
  },
  mutations: {
    setPage(state, payload) {
      state.navbar.page = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
