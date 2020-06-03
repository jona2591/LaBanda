import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

window.firebase = firebase;

Vue.filter("currency", value => {
  return value.toFixed().toLocaleString() + " %";
});


  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
