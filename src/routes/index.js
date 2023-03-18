import { createRouter, createWebHistory } from "vue-router";
import { HomePage, CounterApp, ErrorPage } from "@/pages";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/counter",
    name: "CounterApp",
    component: CounterApp
  },
  {
    path: "/:catchAll(.*)",
    name: "ErrorPage",
    component: ErrorPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
