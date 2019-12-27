import Vue from 'vue'
import Vuex from 'vuex'
import {FormBuilder} from './formBuilder/index.js'
Vue.use(Vuex)
const formBuilder = FormBuilder;

export default new Vuex.Store({
  modules: {
    formbuilder: formBuilder   
  }

})