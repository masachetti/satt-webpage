import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home";

const routes = [{ path: "/", component: Home, name: "home" }];

export const router = createRouter({
  history: createWebHistory("/satt-webpage"),
  routes,
});