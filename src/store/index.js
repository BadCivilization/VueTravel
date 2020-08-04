import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: localStorage.city || '北京'
  },
  actions: {
    changeCityName: function (context, cityname) {
      context.commit('changeCityName', cityname)
    }
  },
  mutations: {
    changeCityName: function (state, cityname) {
      state.city = cityname
      try {
        localStorage.city = cityname
      } catch (e) {}
    }
  }
})
