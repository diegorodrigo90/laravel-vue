import AdminComponent from "@/components/admin/AdminComponent";
import DashboardComponent from "@/components/admin/pages/dashboard/DashboardComponent";
import LoginComponent from "@/components/admin/pages/auth/LoginComponent";
import LogoutComponent from "@/components/admin/pages/auth/LogoutComponent";
import Page404 from "@/components/frontend/pages/404/Page404";
import SiteComponent from "@/components/frontend/SiteComponent";
import HomePageComponent from "@/components/frontend/pages/home/HomePageComponent";
import store from "@/store";
import router from "@/routes";


const guest = async (to, from, next) => {

    if (store.state.auth.authenticated) {
            return router.push({ name: 'dashboard' }).catch(err => {});
    }

    return next(); // all is fine
};

export default [
    /**
     * Rotas Site
     */
    {
        path: "/",
        component: SiteComponent,
        children: [
            {
                path: "",
                component: HomePageComponent,
                name: "home"
            }
        ]
    },

    /**
     * Rotas Admin
     */
    {
        path: "/login",
        beforeEnter: guest,
        component: LoginComponent,
        name: "login"
    },
    {
        path: "/logout",
        component: LogoutComponent,
        name: "logout"
    },

    {
        path: "/admin",
        component: AdminComponent,
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: "",
                component: DashboardComponent,
                name: "dashboard"
            }
        ]
    },

    // Rota 404
    {
        path: "*",
        component: Page404
    }
];
