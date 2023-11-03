const setItemInCart = (state, id, quantity, price) => {
  let itemInCart = state.find((item) => {
    return item.id === item.id
  })
  if (itemInCart) {
    itemInCart.quantity = quantity
    itemInCart.price += price * quantity
  } else {
    state.cart.push({ id, quantity, price })
  }
  console.log(state.id)
  console.log(state.quantity)
  console.log(state.cart)
}

export default {
  setItemInCart
}
