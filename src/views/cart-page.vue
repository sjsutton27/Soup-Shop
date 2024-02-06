<template>
  <div class="cart">
    <ul class="cart-items" v-if="cart && cart.length != 0">
      <div class="cart-item" v-for="item in cart" :key="item.id">
        <img class="menu-item-img" :src="item.image" alt="Cart Item" />
        <p>
          <span>{{ item.name }}</span> <br />
          <span>{{ item.price }}</span
          ><br />
          <span>{{ item.quantity }}</span
          ><br />
        </p>
        <button class="reduce-quantity" @click="reduceQuantity(item.id)">Reduce Quantity</button>
        <br />
        <button class="remove-item" @click="removeItem(item.id)">Remove Item</button><br />
      </div>
    </ul>
    <h3 v-else>No Items in Cart</h3>
    <p class="cart-total">Total in cart: ${{ total }}</p>
  </div>
  <div>
    <button class="confirm" @click="confirmOrder" :disabled="cart.length === 0">
      Confirm Order
    </button>
    <button class="clear" @click="clearCart">Clear Cart</button>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.getters["cart/getCart"]
    },
    total() {
      return this.$store.getters["cart/getTotal"]
    }
  },
  methods: {
    removeItem(id) {
      this.$store.commit("cart/removeItemInCart", id)
    },
    reduceQuantity(id) {
      this.$store.commit("cart/decreaseItemQuantity", id)
    },
    clearCart() {
      this.$store.dispatch("cart/clearCart")
    },
    confirmOrder() {
      // Get the cart items
      const cartItems = this.$store.getters["cart/getCart"]
      console.log(cartItems)
      // Dispatch the cartItem action for each item in the cart
      cartItems.forEach((item) => {
        console.log(item)
        this.$store.dispatch("cart/cartItem", item)
      })

      // Redirect to confirmation page
      this.$router.push("/confirm")
    }
  }
}
</script>

<style scoped>
.cart-items {
  border: 1px solid black;
  border-radius: 20px;
  background: gray;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.cart-item {
  border: 1px solid black;
  border-radius: 20px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  background-color: #f9f9f9;
  width: 200px;
  max-height: 500px;
}

.menu-item-img {
  max-width: 150px;
  height: auto;
  border-radius: 20px;
  padding: 10px;
}

.cart-total {
  font-weight: bold;
}
.reduce-quantity {
  background-color: lightgreen;
  border: 1px solid greenyellow;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px;
  margin-bottom: 5px;
}
.remove-item {
  background-color: yellow;
  border: 1px solid gold;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px;
  margin-bottom: 5px;
}

button:hover {
  opacity: 0.8;
}

.confirm {
  background-color: rgba(0, 216, 0, 0.711);
  border: 1px solid lightgreen;
  color: white;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px;
  margin-bottom: 5px;
}
.clear {
  background-color: rgb(251, 50, 0);
  border: 1px solid lightcoral;
  color: white;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px;
  margin-bottom: 5px;
}
</style>
