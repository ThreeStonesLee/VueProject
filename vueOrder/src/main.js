import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueSocketio from 'vue-socket.io'
import Storage from './model/storage.js'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(new VueSocketio({
  debug: true,
  connection: 'http://a.itying.com?roomid=' + roomid
}))

//从url中获取桌号
console.log(window.location.hash.split('=')[1])

var roomid = window.location.hash.split('=')[1];
Storage.set('roomid', roomid)

import Cart from './components/Cart.vue'
import Home from './components/Home.vue'
import Hot from './components/Hot.vue'
import Order from './components/Order.vue'
import Pcontent from './components/Pcontent.vue'
import Search from './components/Search.vue'
import Start from './components/Start.vue'
import EditPeopleInfo from './components/EditPeopleInfo.vue'

const routes = [
  {path: '/cart', component: Cart},
  {path: '/home', component: Home},
  {path: '/hot', component: Hot},
  {path: '/order', component: Order},
  {path: '/pcontent', component: Pcontent},
  {path: '/search', component: Search},
  {path: '/start', component: Start},
  {path: '/editpeopleinfo', component: EditPeopleInfo},
  {path: '*', redirect: '/start'}
];

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  sockets:{  /*测试期间写 也不不写在根里面*/
    connect: function(){
      console.log('socket connected')
    }
    
  },
  render: h => h(App)
})
