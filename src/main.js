import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import styles from './assets/main.sass'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  styles,
  render: h => h(App)
}).$mount('#app')
