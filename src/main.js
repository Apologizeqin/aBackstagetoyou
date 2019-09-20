import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import Element from 'element-ui'

import './styles/normalize.css' // a modern alternative to CSS resets
import './styles/element-variables.scss'
import './styles/index.scss'


import {} from '../mock'

Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
