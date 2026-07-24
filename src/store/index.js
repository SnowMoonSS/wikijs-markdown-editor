import Vue from 'vue'
import Vuex from 'vuex'
import pathify, { make } from 'vuex-pathify'

Vue.use(Vuex)

pathify.options.mapping = 'standard'
pathify.options.deep = true

// Editor module (required by vuex-pathify for paths like 'editor/content', 'editor/activeModal')
const editorState = {
  content: '# Hello World\n\nWelcome to **WikiJS Markdown Editor**.\n\nStart typing your markdown here...',
  mode: 'edit',
  editorKey: 'markdown',
  activeModal: '',
  activeModalData: null
}

const editor = {
  namespaced: true,
  state: editorState,
  mutations: make.mutations(editorState),
  getters: make.getters(editorState)
}

// Page module (required by vuex-pathify for paths like 'page/locale', 'page/path')
const pageState = {
  locale: 'zh',
  path: 'home'
}

const page = {
  namespaced: true,
  state: pageState,
  mutations: make.mutations(pageState),
  getters: make.getters(pageState)
}

const store = new Vuex.Store({
  plugins: [pathify.plugin],
  modules: {
    editor,
    page
  },
  mutations: {
    showNotification(state, { message, style, icon }) {
      console.log(`[Notification] ${style || 'info'}: ${message}`)
    },
    loadingStart(state, tag) {
      console.log(`[Loading] Start: ${tag}`)
    },
    loadingStop(state, tag) {
      console.log(`[Loading] Stop: ${tag}`)
    }
  }
})

export default store
