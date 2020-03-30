import Vue from "vue";
import Vuex from "vuex";

import preloader from "@/vuex/modules/preloader/preloader";
import auth from "@/vuex/modules/auth/auth";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        preloader,
        auth
    }
});
