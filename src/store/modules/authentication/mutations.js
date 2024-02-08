export default {
  //sets our user data
  setUser(state, payload) {
    state.token = payload.token
    state.userId = payload.userId
    state.tokenExpiration = payload.tokenExpiration
  }
}
