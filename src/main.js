import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import HomePage from './components/HomePage.vue'
import FormPage from './components/FormPage.vue'

Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

const router = new VueRouter({
  routes : [
    {
      path: "/", component: HomePage
    },
    {
      path: "/formPage", component: FormPage
    },
  ],
  mode: "history"
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
