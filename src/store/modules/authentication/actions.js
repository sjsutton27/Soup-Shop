//this is for a-sync. don't use this FOR NOW!
export default {
  registerData(context, data) {
    const userData = {
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword
    }

    context.commit("registerData", registerData)
  }
}
