import { createStore } from "vuex"
import cartModule from "./modules/cart/index.js"
import authenticationModule from "./modules/authentication/index.js"

const store = createStore({
  modules: {
    //allows us to use the module in our vuex store
    cart: cartModule,
    authentication: authenticationModule
  }
})
export default store
