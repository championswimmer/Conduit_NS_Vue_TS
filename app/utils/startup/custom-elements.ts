import Vue from 'nativescript-vue'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { CardView } from 'nativescript-cardview'


export function registerCustomElements() {
  Vue.registerElement(
    'RadSideDrawer', () => RadSideDrawer
  )
  Vue.registerElement(
    'CardView', () => CardView
  )
}