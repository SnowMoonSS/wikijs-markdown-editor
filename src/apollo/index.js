// Apollo shim for WikiJS editor-markdown component.
// The editor uses Apollo for link autocomplete (searching pages),
// which doesn't apply in standalone mode. Returns empty results.

const apolloProvider = {
  defaultClient: {
    query() {
      // Return empty page search results
      return Promise.resolve({
        data: {
          pages: {
            search: {
              results: [],
              totalHits: 0
            }
          }
        }
      })
    }
  }
}

// Install $apollo on Vue prototype so components can use this.$apollo
import Vue from 'vue'
Vue.prototype.$apollo = apolloProvider.defaultClient

export default apolloProvider
