<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <ul class="nav navbar-nav navbar-right">
                    <router-link class="nav-link" :to="{ name: 'dashboard' }">
                        Dashboard
                    </router-link>
                    <router-link class="nav-link" :to="{ name: 'login' }">
                        Login
                    </router-link>
                </ul>s

                <div v-if="user">
                    <div class="dropdown">
                        <a
                            id="dropdownMenuButton"
                            class="dropdown-toggle color-white"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            {{ user.name }}
                        </a>
                        <div
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                        >
                            <a class="dropdown-item" href="#">Meu Perfil</a>
                            <a
                                class="dropdown-item"
                                href="#"
                                @click.prevent="logout"
                                >Sair</a
                            >
                        </div>
                    </div>
                    <!--dropdown-->
                </div>
            </div>
        </nav>
        <div class="spacing-custon">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        user() {
            return this.$store.state.auth.user;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch("logout");

            this.$snotify.success("Sucesso ao deslogar", "logout...");

            this.$router.push({ name: "login" });
        }
    }
};
</script>

<style>
.router-link-exact-active {
    color: #4bd02a !important;
}
.spacing-custon {
    padding: 40px 0;
}
.color-white {
    color: #fff !important;
}
</style>
