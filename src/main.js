import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import VModal from 'vue-js-modal'
import VueFriendlyIframe from 'vue-friendly-iframe';


Vue.use (VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(VModal);
Vue.component('vue-friendly-iframe', VueFriendlyIframe);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
