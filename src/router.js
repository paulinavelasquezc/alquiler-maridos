import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooterSimple from "./layout/AppFooterSimple";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import MaridosAdmin from "./views/Maridos/MaridosAdmin.vue";
import ServicesAdmin from "./views/Services/ServicesAdmin.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter,
      },
    },
    {
      path: "/landing",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooterSimple,
      },
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter,
      },
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter,
      },
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooterSimple,
      },
    },
    {
      path: "/maridos",
      name: "maridos",
      components: {
        header: AppHeader,
        default: MaridosAdmin,
        footer: AppFooterSimple,
      },
    },
    {
      path: "/services",
      name: "services",
      components: {
        header: AppHeader,
        default: ServicesAdmin,
        footer: AppFooterSimple,
      },
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
