import 'babel-polyfill'
import fastClick from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css'
import 'styles/iconfont.css'
Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
