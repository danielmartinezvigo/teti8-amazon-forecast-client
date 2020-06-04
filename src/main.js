import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Buefy from 'buefy'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

import 'buefy/dist/buefy.css'

Vue.use(Buefy)

import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

window.backend = window.config && window.config.backend ? window.config.backend : 'http://localhost:4000'

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
