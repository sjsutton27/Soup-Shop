<template>
  <div class="cart">
    <ul v-if="cart && cart.length != 0">
      <li v-for="item in cart" :key="item.id">
        <p>
          <span>{{ item.name }}</span> <br />
          <span>{{ item.price }}</span
          ><br />
          <span>{{ item.quantity }}</span>
          <br />
        </p>
      </li>
    </ul>
    <h3 v-else>No Items in Cart</h3>
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
  }
}
</script>

<style scoped></style>
