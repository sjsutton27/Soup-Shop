const setItemInCart = (state, { id, image, name, quantity, price }) => {
  //Allows us to add Item in cart
  let itemInCart = state.cart.find((item) => {
    return item.id === id
  })

  quantity = Math.max(0, Math.floor(quantity))

  if (itemInCart) {
    itemInCart.image = image
    itemInCart.name = name
    //increases the quantity if the item gets added again
    itemInCart.quantity += quantity
    itemInCart.price = price
  } else {
    state.cart.push({ id, image, name, quantity, price })
  }
}

const removeItemInCart = (state, id) => {
  //Remove an item in cart
  const itemIndex = state.cart.findIndex((item) => item.id === id)
  if (itemIndex !== -1) {
    state.cart.splice(itemIndex, 1)
  }
}

const decreaseItemQuantity = (state, id) => {
  //Reduces the quantity of the item, but does not completely remove the Item
  const item = state.cart.find((item) => item.id === id)
  if (item && item.quantity > 1) {
    item.quantity -= 1
    // Update the total by subtracting the price of the item being removed
    state.total -= item.price
  }
}

const clearCart = (state) => {
  state.cart = []
}

export default {
  setItemInCart,
  removeItemInCart,
  decreaseItemQuantity,
  clearCart
}
