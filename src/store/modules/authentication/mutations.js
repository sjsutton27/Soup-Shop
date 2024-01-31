const isLogin = (state, email) => {
  state.email = email
  localStorage.setItem("email", email)
  alert("Logged in")
}

const isLogout = (state) => {
  state.email = ""
  localStorage.removeItem("email")
  alert("Logged Out")
}

const initializeStore = (state) => {
  if (localStorage.getItem("email")) {
    state.email = localStorage.getItem("email")
  }
}
const registerUser = (state, payload) => {
  state.users.push(payload)
}
export default {
  isLogin,
  isLogout,
  initializeStore,
  registerUser
}
