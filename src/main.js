import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

// Velocity polyfill — editor-markdown uses Velocity() for preview scroll sync.
//   Velocity(el, 'stop', true)           → cancel scroll animation
//   Velocity(el, 'scroll', { offset, duration, container }) → scroll to element
window.Velocity = function (el, action, opts) {
  if (!el) return
  if (action === 'stop') return
  if (action === 'scroll' && opts && opts.container) {
    const offset = parseInt(opts.offset) || 0
    opts.container.scrollTop = el.offsetTop + offset
  }
}
// Vue components use this.Velocity (resolved via prototype chain)
Vue.prototype.Velocity = window.Velocity

// Prism plugins must be loaded before any component imports
import Prism from 'prismjs'
import 'prismjs/plugins/autoloader/prism-autoloader'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'

// Set Prism autoloader languages path (CDN)
Prism.plugins.autoloader.languages_path =
  'https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/components/'

// WikiJS globally-registered components (used in editor-markdown templates)
import PageSelector from './components/common/page-selector.vue'
Vue.component('page-selector', PageSelector)

import App from './App.vue'
import store from './store'
import i18n from './i18n'
import apolloProvider from './apollo'

// Import CodeMirror CSS
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/display/fullscreen.css'
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/hint/show-hint.css'

// Import KaTeX CSS
import 'katex/dist/katex.min.css'

// Import Prism CSS and plugins
import 'prismjs/themes/prism.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/autoloader/prism-autoloader'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'

// Import custom SCSS
import './scss/components/codemirror.scss'
import './scss/components/katex.scss'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#1976d2',
        secondary: '#424242',
        accent: '#82b1ff',
        error: '#ff5252',
        info: '#2196f3',
        success: '#4caf50',
        warning: '#ffc107'
      },
      dark: {
        primary: '#2196f3',
        secondary: '#424242',
        accent: '#ff4081',
        error: '#ff5252',
        info: '#2196f3',
        success: '#4caf50',
        warning: '#ffc107'
      }
    }
  }
})

new Vue({
  store,
  i18n,
  vuetify,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
