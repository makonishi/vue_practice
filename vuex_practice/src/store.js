import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    // Vuex側でcountを2倍するものという処理を返す
    doubleCount: state => state.count * 2
  }
});