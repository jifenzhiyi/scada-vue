import Vue from 'vue';
import Vuex from 'vuex';
import { loadLanguageAsync } from '@/locale';
import storage from '@/utils/storage';
import localInit from './plugins/localInit';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: storage.get('scada_lang') || 'zh-CN', // 当前选中的语言
    warehouseId: storage.get('scada_warehouse_id') || '', // 当前选中的仓库id
    warehouseIds: storage.get('scada_warehouse_ids') || [], // 仓库列表
  },
  mutations: {
    // 设置仓库ID
    SET_WAREHOUSE_ID(state, id) {
      state.warehouseId = id;
    },
    // 设置仓库列表
    SET_WAREHOUSE_LIST(state, list) {
      state.warehouseIds = list;
    },
    // 设置语言
    SET_LANG(state, lang) {
      state.language = lang;
    },
  },
  actions: {
    SetLang({ commit }, lang) {
      return new Promise((resolve) => {
        commit('SET_LANG', lang);
        loadLanguageAsync(lang);
        resolve();
      });
    },
  },
  plugins: [localInit],
});
