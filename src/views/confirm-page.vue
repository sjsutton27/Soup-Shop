<template>
  <div class="center-container">
    <div class="confirm-box">
      <h1 class="confirm-message">Order has been confirmed and placed!</h1>
      <h1 class="confirm-message">
        If you wish to place another order, navigate to our "Menu" by clicking the top right.
      </h1>
    </div>

    <div class="receipt-box">
      <h2>Your Receipt:</h2>
      <ul class="receipt-items" v-if="cart && cart.length != 0">
        <li class="receipt-item" v-for="item in cart" :key="item.id">
          <div class="item-info">
            <span class="item-name">{{ item.name }}</span>
            <span class="item-quantity">Quantity: {{ item.quantity }}</span>
            <span class="item-price">Price: ${{ item.price }}</span>
          </div>
        </li>
        <p class="receipt-total">Total: ${{ total }}</p>
      </ul>
      <p v-else>No items in the cart</p>
    </div>
  </div>
</template>

<script>
export default {
  //Grabs the cart and Total for the Receipt
  computed: {
    cart() {
      return this.$store.getters["cart/getCart"]
    },
    total() {
      return this.$store.getters["cart/getTotal"]
    }
  }
}
</script>

<style scoped>
.center-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.confirm-box {
  border: 1px solid #ccc;
  background-color: #f8f8f8;
  padding: 1%;
  border-radius: 10px;
  margin-bottom: 5%;
  width: 85%;
}

.confirm-message {
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding: 0;
}

.receipt-box {
  border: 1px solid #ccc;
  background-color: #f8f8f8;
  padding: 15px;
  border-radius: 8px;
  width: 85%;
}

.receipt-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.receipt-item {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.item-info {
  display: flex;
  justify-content: space-between;
}

.item-name {
  font-weight: bold;
  text-align: left;
  width: 150px;
}

.item-price {
  color: #777;
  text-align: right;
}

.item-quantity {
  list-style-position: inside;
  color: #555;
  text-align: center;
  width: 80px;
}

.receipt-total {
  font-weight: bold;
  text-align: right;
  margin-top: 20px;
}
</style>
