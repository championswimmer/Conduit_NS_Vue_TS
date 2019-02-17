import Vue from 'nativescript-vue'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'


export function registerCustomElements() {
  Vue.registerElement(
    'RadSideDrawer', () => RadSideDrawer
  )
}