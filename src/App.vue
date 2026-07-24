<template lang="pug">
  v-app
    editor-markdown(:save='handleSave')
</template>

<script>
import EditorMarkdown from './components/editor/editor-markdown.vue'

export default {
  components: {
    EditorMarkdown
  },
  methods: {
    handleSave() {
      const content = this.$store.get('editor/content')
      console.log('[Save] Content saved:', content)
      this.$store.commit('showNotification', {
        message: 'Content saved! (check console)',
        style: 'success',
        icon: 'check'
      })
    }
  }
}
</script>
