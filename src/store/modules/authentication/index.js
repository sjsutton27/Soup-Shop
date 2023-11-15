import authenticationMutations from "./mutations.js"
import authenticationActions from "./actions.js"
import authenticationGetters from "./getters.js"

export default {
  namespaced: true,
  state() {
    return {
      email: "",
      isLoggedIn: false
    }
  },
  mutations: authenticationMutations,
  actions: authenticationActions,
  getters: authenticationGetters
}
