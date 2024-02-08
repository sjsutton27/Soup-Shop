export default {
  //Backend, Promises
  async login(context, payload) {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAWwTBObTT2xmc_aFD9cj9LQ_DarKovVHo",
      {
        method: "POST",
        //POST the email and password into data base
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
      }
    )
    const responseData = await response.json()

    if (!response.ok) {
      const error = new Error(responseData.message || "failed to authenticate.")
      throw error
    }
    // Should get: idtoken, email, refresh Token, expireIn variable, localId
    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    })
    console.log(responseData.idToken)
  },
  //async allows the data send a response to the API and then once the response arrives we ether send an error or perform what needs to be done with the return data
  async register(context, payload) {
    const response = await fetch(
      //API key may need to update every time depending if my firebase Web WPI Key changes
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAWwTBObTT2xmc_aFD9cj9LQ_DarKovVHo",
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
      }
    )
    const responseData = await response.json()
    console.log(responseData)
    if (!response.ok) {
      console.log(responseData)
      const error = new Error(responseData.message || "failed to authenticate.")
      throw error
    }

    console.log(responseData)
    // Should get: idtoken, email, refresh Token, expireIn variable, localId
    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    })
  },
  //when a user logout there database information turns to null to display the user is not login
  logout(context) {
    context.commit("setUser", {
      token: null,
      userId: null,
      tokenExpiration: null
    })
  }
}
