import cartMutations from "./mutations.js"
import cartActions from "./actions.js"
import counterGetters from "./getters.js"

export default {
  namespaced: true,
  state() {
    return {}
  },
  mutations: cartMutations,
  actions: cartActions,
  getters: cartGetters
}
