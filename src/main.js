import 'babel-polyfill'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css'
import 'styles/border.css'
import 'swiper/dist/css/swiper.css'
import 'styles/iconfont.css'
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
