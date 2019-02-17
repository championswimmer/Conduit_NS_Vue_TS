import Vue from 'nativescript-vue';
import App from './App.vue';
import VueDevtools from 'nativescript-vue-devtools';
import {isAndroid, isIOS} from 'tns-core-modules/platform'
import { sync } from 'vuex-router-sync'

import router from './router'
import store from './store'
import { registerCustomElements } from '@/utils/startup/custom-elements'
import { initFontIcons } from '@/utils/startup/fonticon'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

registerCustomElements()
initFontIcons()

// Easy global OS check
Vue.prototype.$isAndroid = isAndroid
Vue.prototype.$isIOS = isIOS


// Start from home page
sync(store, router)
router.replace('/home')

new Vue({
  render: h => h('frame', [h(App)]),
  router,
  store
}).$start();

