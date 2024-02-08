import mutations from "./mutations.js"
import actions from "./actions.js"
import getters from "./getters.js"
//Allows us to acess the authentication module files in our application
export default {
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null
    }
  },
  mutations,
  actions,
  getters
}
