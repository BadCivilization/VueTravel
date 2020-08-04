// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store/index'
import 'style/reset.css'
import 'style/border.css'
import fastClick from 'fastclick'
import 'style/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import 'style/initialize.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
