import axios from "axios";
import { URL_BASE, NAME_TOKEN } from "@/configs/configs";

const RESOURCE = "auth/";

const state = {
    me: {},
    authenticated: false
};

const mutations = {
    AUTH_USER_OK(state, user) {
        state.user = user;
        state.authenticated = true;
    },
    AUTH_USER_CHECK(state , me) {
        state.me = me;

    },
    AUTH_USER_LOGOUT(state) {
        (state.me = {}), (state.authenticated = false);
    }
};

const actions = {
    login(context, formData) {
        context.commit("LOADING", true);

        return new Promise((resolve, reject) => {
            axios
                .post(`${URL_BASE}${RESOURCE}`, formData)
                .then(response => {
                    context.commit("AUTH_USER_OK", response.data.access_token);
                    localStorage.setItem(NAME_TOKEN, response.data.access_token);

                    axios.defaults.headers.common[
                        "Authorization"
                    ] = `Bearer ${response.data.access_token}`;

                    resolve();
                })
                .catch(error => {
                    reject(error.response.data);
                })
                .finally(() => context.commit("LOADING", false));
        });
    },

    logout(context) {
        localStorage.removeItem(NAME_TOKEN);
        context.commit("AUTH_USER_LOGOUT");
    },

    checkLogin(context) {
        const accessToken = localStorage.getItem(NAME_TOKEN);

        return new Promise((resolve, reject) => {
            if (!accessToken) {
                context.commit("AUTH_USER_LOGOUT");

                return reject();
            }

            return axios
                .post(`${URL_BASE}me`)
                .then(response => {
                    const me = response.data;

                    context.commit("AUTH_USER_CHECK", me);

                    return resolve();
                })
                .catch(error => {
                    localStorage.removeItem(NAME_TOKEN);
                    context.commit("AUTH_USER_LOGOUT");

                    return reject(error.response.data);
                });
        });
    }
};

export default {
    state,
    mutations,
    actions
};
