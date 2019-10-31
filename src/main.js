import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Solution from './finished/components/Layout'
import Initial from './initial/components/Layout'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/solution', component: Solution },
  { path: '/', component: Initial },
]

const router = new VueRouter({
  routes 
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
