import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import path from 'path'

// Stub for markdown-it-imsize's Node.js image-size detector (browser-incompatible)
const imsizeStub = `module.exports = { lookup: function() {}, disableFS: function() {} };`
const detectorStub = `module.exports = function() { return null; };`

// Resolve path to imsize index.js for exact matching
const imsizeIndexPath = path.resolve(__dirname, 'node_modules/markdown-it-imsize/lib/imsize/index.js')
const imsizeDetectorPath = path.resolve(__dirname, 'node_modules/markdown-it-imsize/lib/imsize/detector.js')

/** Vite plugin: stub out Node.js-specific markdown-it-imsize modules for browser */
function stubImSize() {
  return {
    name: 'stub-markdown-it-imsize',
    resolveId(id) {
      if (id === imsizeIndexPath) return id
      if (id === imsizeDetectorPath) return id
      return null
    },
    load(id) {
      if (id === imsizeIndexPath) return imsizeStub
      if (id === imsizeDetectorPath) return detectorStub
      return null
    }
  }
}

export default defineConfig({
  plugins: [
    createVuePlugin(),
    stubImSize()
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: 'fix-markdown-it-imsize',
          setup(build) {
            build.onLoad(
              { filter: /markdown-it-imsize\/lib\/imsize\/index\.js$/ },
              () => ({ contents: imsizeStub, loader: 'js' })
            )
            build.onLoad(
              { filter: /markdown-it-imsize\/lib\/imsize\/detector\.js$/ },
              () => ({ contents: detectorStub, loader: 'js' })
            )
          }
        }
      ]
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "${path.resolve(__dirname, 'src/scss/base/material.scss')}";

          // Material color function (from Vuetify)
          @function mc($name, $variant: '500') {
            @return map-get(map-get($material-colors, $name), $variant);
          }

          // Breakpoint variables
          $tablet: 769px !default;
          $desktop: 980px !default;
          $widescreen: 1180px !default;

          // Responsive mixins
          @mixin from($device) {
            @media screen and (min-width: $device) {
              @content;
            }
          }
          @mixin until($device) {
            @media screen and (max-width: ($device - 1px)) {
              @content;
            }
          }
          @mixin mobile {
            @media screen and (max-width: ($tablet - 1px)) {
              @content;
            }
          }
          @mixin tablet {
            @media screen and (min-width: $tablet) {
              @content;
            }
          }
        `
      }
    }
  }
})
