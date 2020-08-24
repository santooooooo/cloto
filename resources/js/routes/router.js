import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import home from "@/components/front/layout.vue";
import welcome from "@/components/front/welcome.vue";
import register from "@/components/front/register.vue";
import login from "@/components/front/login.vue";
import userPage from "@/components/user/userPage.vue";

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: home,
            children: [
                {
                    path: "",
                    component: welcome
                },
                {
                    path: "register",
                    name: "register",
                    component: register
                },
                {
                    path: "login",
                    name: "login",
                    component: login
                }
            ]
        },
        {
            path: "/user/:username",
            name: "userPage",
            component: userPage
        },
    ]
});

export default router;
