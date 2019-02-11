import Vue from 'nativescript-vue';
import App from './App.vue';
import VueDevtools from 'nativescript-vue-devtools';

import router from './router'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer
)

// Start from home page
router.replace('/home')

new Vue({
  render: h => h('frame', [h(App)]),
  router
}).$start();

