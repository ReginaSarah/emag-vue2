import Vue from 'vue'
import router from "@/router/route.js";
import vuetify from "@/plugins/vuetify.js";
import App from "@/App.vue";
import VuetifyMask from "vuetify-mask-with-slots";

Vue.config.productionTip = false


Vue.use(VuetifyMask);

new Vue({
  vuetify,
  router,
  render: h => h(App),
  
}).$mount('#app')
