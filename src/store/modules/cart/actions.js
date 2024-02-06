import { mapState } from "vuex"

export default {
  clearCart({ commit }) {
    commit("clearCart")
  },

  async cartItem(context, data) {
    const itemData = {
      idItem: data.id,
      image: data.image,
      name: data.name,
      quantity: data.quantity,
      price: data.price
    }

    // Get the authentication token from Vuex state
    // const token = context.state.auth.token

    // if (!token) {
    //   throw new Error("Authentication token is missing.")
    // }

    // Construct the request URL
    const url = `https://soup-shop-e2841-default-rtdb.firebaseio.com/cart/${data.id}.json?`

    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(itemData)
    })

    if (!response.ok) {
      // Handle error
      console.error("Error while updating cart item:", response.statusText)
      return
    }

    // Commit the updated item data to the store
    context.commit("cartItem", {
      ...itemData,
      id: data.id
    })
  }
}
