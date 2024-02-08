export default {
  //Id assign to user
  userId(state) {
    return state.userId
  },
  //token given by firebase
  token(state) {
    return state.token
  },
  //Checks if a user is Authenticated if the token is not null
  isAuthenticated(state) {
    return !!state.token
  }
}
