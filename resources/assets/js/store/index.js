import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

import preloader from "@/store/modules/preloader/";
import auth from "@/store/modules/auth/";


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        preloader,
        auth,
        plugins: [createPersistedState({ storage: window.sessionStorage })],
    }
});
