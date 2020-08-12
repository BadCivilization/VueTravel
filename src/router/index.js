import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/home.vue')
    }, {
      path: '/city',
      name: 'City',
      component: () => import('../pages/citys/city.vue')
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('../pages/detail/detail.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
