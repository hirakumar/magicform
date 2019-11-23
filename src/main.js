import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



import Dexie from 'dexie';
Vue.use(BootstrapVue)

console.log(Dexie);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
