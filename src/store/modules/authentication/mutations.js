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

export default {
  isLogin,
  isLogout,
  initializeStore
}
