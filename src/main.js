import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify';
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

Vue.config.productionTip = false
Vue.use(VueLodash, { name: 'custom' , lodash: lodash });
new Vue({
  methods: {
    test() {
      console.log(this.lodash.random(20));
      console.log(this._.random(20));
      console.log(this.custom.random(20))
    },
  },
  vuetify,
  render: h => h(App)
}).$mount('#app')

// Lodash Added
// console.log(Vue.lodash.random(20))
// console.log(Vue._.random(20))
// console.log(Vue.custom.random(20))
