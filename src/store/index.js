import { createStore } from "vuex"
import cartModule from "./modules/cart/index.js"
import authenticationModule from "./modules/authentication/index.js"

const store = createStore({
  modules: {
    cart: cartModule,
    authentication: authenticationModule
  },
  state() {
    return {}
  }
})
export default store
