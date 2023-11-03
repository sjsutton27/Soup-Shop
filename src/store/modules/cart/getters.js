const getCart = (state) => {
  return state.cart
}

function getTotal(state) {
  var currentTotal = 0
  if (state.cart && state.cart.length === 0) {
    state.totalPrice = 0
    return state.totalPrice
  }
  state.cart.forEach((item) => {
    currentTotal += item.price * item.quantity
  })

  state.totalPrice = currentTotal
  return state.totalPrice
}

export default {
  getCart,
  getTotal
}
