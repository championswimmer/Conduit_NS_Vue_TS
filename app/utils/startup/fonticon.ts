import Vue from 'nativescript-vue'
import { fonticon, TNSFontIcon } from 'nativescript-fonticon/nativescript-fonticon'

export function initFontIcons() {
  // Prints all icon classes loaded
  // TNSFontIcon.debug = (TNS_ENV === 'development')
  TNSFontIcon.paths = {
    'mdi': './assets/material-design-icons.css'
  }
  TNSFontIcon.loadCss()
  Vue.filter('fonticon', fonticon)
}