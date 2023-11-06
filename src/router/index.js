import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/home-page.vue"
import Menu from "../views/menu-page.vue"
import Cart from "../views/cart-page.vue"
import Login from "../views/login-page.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home-page",
      component: Home
    },
    {
      path: "/menu",
      name: "menu-page",
      component: Menu
    },
    {
      path: "/cart",
      name: "cart-page",
      component: Cart
    },
    {
      path: "/login",
      name: "login-page",
      component: Login
    }
  ]
})

export default router
