import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import ckeditor from '@ckeditor/ckeditor5-vue';

// Vue.use( ckeditor );

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faUser,faUndo,faChevronDown,faChevronUp,faTrashAlt,faCode, faFont,faHeading, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


// import Dexie from 'dexie';
Vue.use(BootstrapVue)

library.add(faUserSecret)
library.add(faUser)
library.add(faChevronDown)
library.add(faChevronUp)
library.add(faTrashAlt)
library.add(faCode)
library.add(faFont)
library.add(faHeading)
library.add(faPlus)
library.add(faMinus)


Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
