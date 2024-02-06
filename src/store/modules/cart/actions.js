import { mapState } from "vuex"

export default {
  async clearCart({ commit, getters }) {
    try {
      // Get the authentication token from Vuex state
      const token = getters.token

      // Construct the request URL with the authentication token
      const url = `https://soup-shop-e2841-default-rtdb.firebaseio.com/cart.json?auth=${token}`

      // Send a DELETE request to remove all items from the 'cart' node
      const response = await fetch(url, {
        method: "DELETE"
      })

      if (!response.ok) {
        throw new Error("Failed to clear cart.")
      }

      // Commit the clearCart mutation to update the state
      commit("clearCart")
    } catch (error) {
      console.error("Error clearing cart:", error.message)
      throw error
    }
  },

  async cartItem(context, data) {
    const itemData = {
      idItem: data.id,
      image: data.image,
      name: data.name,
      quantity: data.quantity,
      price: data.price
    }

    //Get the authentication token from Vuex state
    const token = context.getters.token

    // if (!token) {
    //   throw new Error("Authentication token is missing.")
    // }

    // Construct the request URL ?auth is a query paramete
    const url =
      `https://soup-shop-e2841-default-rtdb.firebaseio.com/cart/${data.id}.json?auth` + token

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
