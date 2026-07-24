<template lang="pug">
  v-dialog(
    v-model='isShown'
    max-width='500px'
    overlay-color='blue darken-4'
    overlay-opacity='.7'
    )
    v-card.page-selector
      .dialog-header.is-blue
        v-icon.mr-3(color='white') mdi-page-next-outline
        .body-1 {{$t('common:pageSelector.selectTitle')}}
        v-spacer
      v-card-text.pa-4
        v-select(
          v-if='namespaces.length > 1'
          :items='namespaces'
          v-model='currentLocale'
          label='Locale'
          outlined
          dense
          )
        v-text-field(
          ref='pathIpt'
          label='Page Path'
          v-model='currentPath'
          outlined
          dense
          hint='e.g. my-page or folder/my-page'
          persistent-hint
          @keydown.enter='open'
          )
      v-card-actions.grey.pa-2(:class='$vuetify.theme.dark ? `darken-2` : `lighten-1`')
        v-spacer
        v-btn(text, @click='close') Cancel
        v-btn.px-4(color='primary', @click='open', :disabled='!isValidPath')
          v-icon(left) mdi-check
          span Select
</template>

<script>
/* global siteLangs, siteConfig */
const localeSegmentRegex = /^[A-Z]{2}(-[A-Z]{2})?$/i

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    path: {
      type: String,
      default: 'new-page'
    },
    locale: {
      type: String,
      default: 'en'
    },
    mode: {
      type: String,
      default: 'select'
    },
    openHandler: {
      type: Function,
      default: () => {}
    },
    mustExist: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentPath: 'new-page',
      currentLocale: 'en'
    }
  },
  computed: {
    isShown: {
      get() { return this.value },
      set(val) { this.$emit('input', val) }
    },
    namespaces() {
      return (typeof siteLangs !== 'undefined' && siteLangs.length)
        ? siteLangs.map(ns => ns.code)
        : [(typeof siteConfig !== 'undefined' && siteConfig.lang) || 'en']
    },
    isValidPath() {
      if (!this.currentPath || this.currentPath.length < 1) {
        return false
      }
      const firstSection = this.currentPath.split('/')[0]
      if (localeSegmentRegex.test(firstSection)) {
        return false
      }
      return true
    }
  },
  watch: {
    isShown(newValue, oldValue) {
      if (newValue && !oldValue) {
        this.currentPath = this.path || 'new-page'
        this.currentLocale = this.locale || 'en'
        this.$nextTick(() => {
          if (this.$refs.pathIpt) {
            this.$refs.pathIpt.focus()
          }
        })
      }
    }
  },
  methods: {
    close() {
      this.isShown = false
    },
    open() {
      const exit = this.openHandler({
        locale: this.currentLocale,
        path: this.currentPath
      })
      if (exit !== false) {
        this.close()
      }
    }
  }
}
</script>

<style lang='scss'>
.page-selector {
  .dialog-header {
    padding: 12px 16px;
    display: flex;
    align-items: center;

    &.is-blue {
      background-color: mc('blue', '700');
      color: #fff;
    }
  }
}
</style>
