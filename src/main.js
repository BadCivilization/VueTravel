// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
// 入口文件处引入reset适配文件
import './assets/styles/border.css'
// 入口文件处引入border文件解决移动端边框单位问题
import fastClick from 'fastclick'
// 解决300毫秒点击延迟问题

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // ES6语法组件注册，默认键值同名
  components: { App },
  template: '<App/>'
})
