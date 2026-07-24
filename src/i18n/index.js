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
  },
  zh: {
    'editor:backToEditor': '返回编辑器',
    'editor:markup.bold': '粗体',
    'editor:markup.italic': '斜体',
    'editor:markup.strikethrough': '删除线',
    'editor:markup.heading': '标题 {level}',
    'editor:markup.subscript': '下标',
    'editor:markup.superscript': '上标',
    'editor:markup.blockquote': '引用',
    'editor:markup.blockquoteInfo': '信息引用',
    'editor:markup.blockquoteSuccess': '成功引用',
    'editor:markup.blockquoteWarning': '警告引用',
    'editor:markup.blockquoteError': '错误引用',
    'editor:markup.unorderedList': '无序列表',
    'editor:markup.orderedList': '有序列表',
    'editor:markup.inlineCode': '行内代码',
    'editor:markup.keyboardKey': '键盘按键',
    'editor:markup.horizontalBar': '水平分隔线',
    'editor:markup.toggleSpellcheck': '切换拼写检查',
    'editor:markup.togglePreviewPane': '切换预览窗格',
    'editor:markup.insertLink': '插入链接',
    'editor:markup.insertAssets': '插入资源',
    'editor:markup.insertDiagram': '插入图表',
    'editor:markup.distractionFreeMode': '免打扰模式',
    'editor:markup.markdownFormattingHelp': 'Markdown 格式帮助',
    'editor:markup.noSelectionError': '请先选中文本。',
    'common:pageSelector.createTitle': '创建新页面',
    'common:pageSelector.moveTitle': '移动页面',
    'common:pageSelector.selectTitle': '选择页面',
    'common:pageSelector.virtualFolders': '文件夹',
    'common:pageSelector.pages': '页面',
    'common:pageSelector.folderEmptyWarning': '此文件夹为空。',
    'common:actions.cancel': '取消',
    'common:actions.select': '选择'
  }
}

const i18n = new VueI18n({
  locale: 'zh',
  fallbackLocale: 'en',
  messages
})

export default i18n
