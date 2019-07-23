import Vue from 'vue'
import App from './App.vue'
import PortalVue from 'portal-vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(PortalVue)
Vue.use(BootstrapVue)
//Vue.component('container-navbar', { template: '#container-navbar'  })

var app = new Vue({
  el: '#app',
  render: h => h(App),
})

// вызывать методы можно и императивно
//app.greet() // => 'Привет, Vue.js!'
