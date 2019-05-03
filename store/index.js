import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      article: {},
      showFabButton: false
    },
    mutations: {
      setArticle(state, data) {
        state.article = data
      },
      setFabButton(state, data) {
        state.showFabButton = data
      }
    }
  })
}

export default createStore
