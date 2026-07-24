import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// WikiJS uses vue-i18next with colon-separated keys (e.g. 'editor:markup.bold').
// vue-i18n uses dot-separated keys by default, so we flatten the messages to
// use the exact colon-separated keys that the component's $t() calls expect.
const messages = {
  en: {
    'editor:backToEditor': 'Back to Editor',
    'editor:markup.bold': 'Bold',
    'editor:markup.italic': 'Italic',
    'editor:markup.strikethrough': 'Strikethrough',
    'editor:markup.heading': 'Heading {level}',
    'editor:markup.subscript': 'Subscript',
    'editor:markup.superscript': 'Superscript',
    'editor:markup.blockquote': 'Blockquote',
    'editor:markup.blockquoteInfo': 'Info Blockquote',
    'editor:markup.blockquoteSuccess': 'Success Blockquote',
    'editor:markup.blockquoteWarning': 'Warning Blockquote',
    'editor:markup.blockquoteError': 'Error Blockquote',
    'editor:markup.unorderedList': 'Unordered List',
    'editor:markup.orderedList': 'Ordered List',
    'editor:markup.inlineCode': 'Inline Code',
    'editor:markup.keyboardKey': 'Keyboard Key',
    'editor:markup.horizontalBar': 'Horizontal Bar',
    'editor:markup.toggleSpellcheck': 'Toggle Spellcheck',
    'editor:markup.togglePreviewPane': 'Toggle Preview Pane',
    'editor:markup.insertLink': 'Insert Link',
    'editor:markup.insertAssets': 'Insert Assets',
    'editor:markup.insertDiagram': 'Insert Diagram',
    'editor:markup.distractionFreeMode': 'Distraction Free Mode',
    'editor:markup.markdownFormattingHelp': 'Markdown Formatting Help',
    'editor:markup.noSelectionError': 'You must select some text first.',
    'common:pageSelector.createTitle': 'Create a New Page',
    'common:pageSelector.moveTitle': 'Move Page',
    'common:pageSelector.selectTitle': 'Select a Page',
    'common:pageSelector.virtualFolders': 'Folders',
    'common:pageSelector.pages': 'Pages',
    'common:pageSelector.folderEmptyWarning': 'This folder is empty.',
    'common:actions.cancel': 'Cancel',
    'common:actions.select': 'Select'
  }
}

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n
