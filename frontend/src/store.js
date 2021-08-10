import Vue from 'vue'
import Vuex from 'vuex'

// Pluginを全体で使用
Vue.use(Vuex)

export default
new Vuex.Store({
  state: {
    count: 2,
    username: "",
  }
})
