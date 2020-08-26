import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store/index'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/initialize.css'
import './assets/styles/iconfont.css'

import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import 'babel-polyfill'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
