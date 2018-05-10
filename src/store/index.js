import Vue from 'vue'
import Vuex from 'vuex'
import ls from 'store2'
import lang from '@/assets/lang'

const CHANGE_LANG = 'CHANGE_LANG'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  lang: ls.get('lang') || 'zh'
}

const getters = {
  lang: (state) => state.lang,
  string: (state) => lang[state.lang]
}

const mutations = {
  [CHANGE_LANG] (state) {
    state.lang = state.lang === 'zh' ? 'en' : 'zh'
    ls.set('lang', state.lang)
  }
}

const actions = {
  changeLang ({commit}) {
    commit(CHANGE_LANG)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: debug
})

export default store
