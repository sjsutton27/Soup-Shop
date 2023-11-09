const setItemInCart = (state, { id, image, name, quantity, price }) => {
  let itemInCart = state.cart.find((item) => {
    return item.id === id
  })
  if (itemInCart) {
    itemInCart.image = image
    itemInCart.name = name
    itemInCart.quantity += quantity
    itemInCart.price = price
  } else {
    state.cart.push({ id, image, name, quantity, price })
  }
}

const removeItemInCart = (state, id) => {
  const itemIndex = state.cart.findIndex((item) => item.id === id)
  if (itemIndex !== -1) {
    state.cart.splice(itemIndex, 1)
  }
}

const decreaseItemQuantity = (state, id) => {
  const item = state.cart.find((item) => item.id === id)

  if (item && item.quantity > 1) {
    item.quantity -= 1
    // Update the total by subtracting the price of the item being removed
    state.total -= item.price
  }
}

export default {
  setItemInCart,
  removeItemInCart,
  decreaseItemQuantity
}
