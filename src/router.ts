import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./pages/dashbboard/Dashboard.vue";
import AboutView from "./pages/AboutView.vue";
import Layout from "./components/Layout.vue";

const routes = [
  {
    path: "/",
    component: Layout, // 👈 Usa el layout principal
    children: [
      { path: "", component: Dashboard },
      { path: "about", component: AboutView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
