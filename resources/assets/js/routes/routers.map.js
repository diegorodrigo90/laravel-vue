import AdminComponent from "@/components/admin/AdminComponent";
import DashboardComponent from "@/components/admin/pages/dashboard/DashboardComponent";
import LoginComponent from "@/components/admin/pages/auth/LoginComponent";
import LogoutComponent from "@/components/admin/pages/auth/LogoutComponent";
import Page404 from "@/components/frontend/pages/404/Page404";
import SiteComponent from "@/components/frontend/SiteComponent";
import HomePageComponent from "@/components/frontend/pages/home/HomePageComponent";
import store from '@/vuex/store';



let entryUrl = null;

const guard = async (to, from, next) => {
  if (store.state.auth.authenticated) {
    if (entryUrl) {
      const url = entryUrl;
      entryUrl = null;
      return next(url); // goto stored url
    } else {
      return next(); // all is fine
    }
  }

  await store.dispatch('checkLogin');
  // we use await as this async request has to finish
  // before we can be sure

  if (store.state.auth.authenticated) {
    next();
  } else {
    entryUrl = to.path; // store entry url before redirect
    next('/entrar');
  }
};






export default [
    /**
     * Rotas Site
     */
    {
        path: "/",
        component: SiteComponent,
        children: [{
            path: "",
            beforeEnter: guard, // Using guard before entering the route
            component: HomePageComponent,
            name: "home"
        }]
    },

    /**
     * Rotas Admin
     */
    {
        path: "/entrar",
        component: LoginComponent,
        name: "auth"
    },
    {
        path: "/sair",
        component: LogoutComponent,
        name: "auth"
    },

    {
        path: "/admin",
        component: AdminComponent,
        beforeEnter: guard, // Using guard before entering the route
        children: [
            {
                path: "",
                component: DashboardComponent,
                name: "dashboard"
            },
        ]
    },

    // Rota 404
    {
        path: "*",
        component: Page404
    }
];
