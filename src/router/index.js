import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/home-page.vue"
import Menu from "../views/menu-page.vue"
import Cart from "../views/cart-page.vue"
import Auth from "../views/auth-page.vue"
import Confirm from "../views/confirm-page.vue"

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
      path: "/auth",
      name: "auth-page",
      component: Auth
    },
    {
      path: "/confirm",
      name: "confirm-page",
      component: Confirm
    }
  ]
})

export default router
