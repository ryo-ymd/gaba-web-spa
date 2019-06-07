// import 'babel-polyfill';

import Vue from 'vue'
// import Vuex from 'vuex';

// import route from './route';
// import store from './store';

// Vue.use(Vuex);


// Bootstrapの設定
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

// ルーティングの設定
// ルーター用基本コンポーネントの読み込み
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 各ページコンポーネントの読み込み
import Index from './pages/Index'
import Page1 from './pages/Page1'
import APITest1 from './pages/APITest1'
import APITest2 from './pages/APITest2'
import NotFound from './pages/NotFound'

// import NavBar from './components/NavBar'
// Vue.component('nav-bar', NavBar)

// ルーティングに追加
const routes = [
  { path: '/', component: Index, meta: { title: 'ガバWebDev会トップページ' } },
  { path: '/page1', component: Page1, meta: { title: 'テストのページ' } },
  { path: '/apitest1', component: APITest1, meta: { title: 'APIテストのページ1' } },
  { path: '/apitest2', component: APITest2, meta: { title: 'APIテストのページ2' } },
  { path: '*', component: NotFound }
]

// ルーター初期化
const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes,
})
router.afterEach((to, from) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
})

// id: Appにマウント
const app = new Vue({
  router
}).$mount('#app')