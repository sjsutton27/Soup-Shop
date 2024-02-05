export default {
  async login(context, payload) {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAWwTBObTT2xmc_aFD9cj9LQ_DarKovVHo",
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
  logout(context) {
    context.commit("setUser", {
      token: null,
      userId: null,
      tokenExpiration: null
    })
  }
}

// async registerData(context, data) {
//   const userId = context.rootGetters.userId
//   const userData = {
//     email: data.email,
//     password: data.password
//   }

//   const response = await fetch(
//     `https://soup-shop-e2841-default-rtdb.firebaseio.com/register/${userId}.json`,
//     {
//       method: "POST", //PUT allows us to not change on unique ID
//       body: JSON.stringify(userData)
//     }
//   )
//   if (!response.ok) {
//     //error ...
//   }
//   context.commit("registerData", { ...registerData, id: userId })
// }
