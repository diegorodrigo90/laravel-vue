import Vue from "vue";
import VueRouter from "vue-router";

import routes from "@/routes/routers.map";
import store from "@/vuex/store";

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: "history"
});



// router.beforeEach((to, from, next) => {
//     if (to.meta.requiresAuth && !store.state.auth.authenticated) {
//         return router.push({ name: 'auth' });
//     } else if (to.meta.requiresAuth && store.state.auth.authenticated) {
//         next();
//     } else {
//         next();
//     }
// });

export default router;
