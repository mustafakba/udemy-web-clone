import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/Pages/HomePage.vue";
import PreviewPage from "@/Pages/PreviewPage";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: `/preview/:name`,
        name: "Preview",
        component :PreviewPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;