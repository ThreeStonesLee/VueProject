import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(VueResource)

import Cart from './components/Cart.vue'
import Home from './components/Home.vue'
import Hot from './components/Hot.vue'
import Order from './components/Order.vue'
import Pcontent from './components/Pcontent.vue'
import Search from './components/Search.vue'
import Start from './components/Start.vue'

const routes = [
  {path: '/cart', component: Cart},
  {path: '/home', component: Home},
  {path: '/hot', component: Hot},
  {path: '/order', component: Order},
  {path: '/pcontent', component: Pcontent},
  {path: '/search', component: Search},
  {path: '/start', component: Start},
  {path: '*', redirect: '/start'}
];

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
