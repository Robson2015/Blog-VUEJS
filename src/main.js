import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VuePaginate from 'vue-paginate'
import VueRouter from 'vue-router'
import PostDetail from './components/PostDetail'
import Home from './components/Home'
import Blog from './components/Blog'
import Contact from './components/Contact'


Vue.use(VueResource);
Vue.use(VuePaginate);
Vue.use(VueRouter);

const routes = [
	{ path: '/post', component: Blog },
  { path: '/post/:id', component: PostDetail },
  { path: '/home', component: Home },
  { path: '/contact', component: Contact}
];

const router = new VueRouter({
  mode: 'history',
  routes
})

// INIT APP
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
