import Vue from "vue";
import Router from "vue-router";

import routes from "@/routes/routers.map";
import store from "@/store";

Vue.use(Router);

const router = new Router({
    routes,
    mode: "history"
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const authenticated = store.state.auth.authenticated;
    if (requiresAuth && !authenticated) {
        if (router.currentRoute.name !== 'login') {
            return router.push({ name: 'login'})
        }
    } else if (requiresAuth && authenticated) {
        next();
    } else {
        next();
    }
})

export default router;
