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
  background-color: red;
}
</style>
