import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// Map of translation keys to plain English fallbacks.
// Keys are in the format `editor:markup.bold` which vue-i18n uses
// as nested paths: `editor.markup.bold`.
const messages = {
  en: {
    editor: {
      backToEditor: 'Back to Editor',
      markup: {
        bold: 'Bold',
        italic: 'Italic',
        strikethrough: 'Strikethrough',
        heading: 'Heading {level}',
        subscript: 'Subscript',
        superscript: 'Superscript',
        blockquote: 'Blockquote',
        blockquoteInfo: 'Info Blockquote',
        blockquoteSuccess: 'Success Blockquote',
        blockquoteWarning: 'Warning Blockquote',
        blockquoteError: 'Error Blockquote',
        unorderedList: 'Unordered List',
        orderedList: 'Ordered List',
        inlineCode: 'Inline Code',
        keyboardKey: 'Keyboard Key',
        horizontalBar: 'Horizontal Bar',
        toggleSpellcheck: 'Toggle Spellcheck',
        togglePreviewPane: 'Toggle Preview Pane',
        insertLink: 'Insert Link',
        insertAssets: 'Insert Assets',
        insertDiagram: 'Insert Diagram',
        distractionFreeMode: 'Distraction Free Mode',
        markdownFormattingHelp: 'Markdown Formatting Help',
        noSelectionError: 'You must select some text first.'
      }
    },
    common: {
      pageSelector: {
        createTitle: 'Create a New Page',
        moveTitle: 'Move Page',
        selectTitle: 'Select a Page',
        virtualFolders: 'Folders',
        pages: 'Pages'
      }
    }
  }
}

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n
