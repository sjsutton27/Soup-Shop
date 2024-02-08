const getCart = (state) => {
  //gets our cart
  return state.cart
}

function getTotal(state) {
  //gets our total base on items in the cart and quantity
  var currentTotal = 0
  if (state.cart && state.cart.length === 0) {
    currentTotal = 0
    state.totalPrice = currentTotal
    return state.totalPrice
  }
  state.cart.forEach((item) => {
    currentTotal += item.price * item.quantity
  })
  currentTotal = Math.round(currentTotal * 100) / 100
  state.totalPrice = currentTotal
  return state.totalPrice
}

export default {
  getCart,
  getTotal
}
