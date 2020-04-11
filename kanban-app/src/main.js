// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ErrorBoundary from './ErrorBoundary.vue'
import router from './router'
import 'es6-promise/auto'
import store from './store'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

Vue.component(ErrorBoundary.name, ErrorBoundary)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
