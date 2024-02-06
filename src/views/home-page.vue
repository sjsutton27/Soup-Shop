<template>
  <section class="home">
    <h1>Welcome to the Soup Shop</h1>
    <p>
      Explore a variety of delicious soups made with love and high-quality ingredients. Whether
      you're a fan of hearty stews or chilies, we have something for every soup lover!
    </p>
    <p>Navigate to Authentication to Register or Login if you are a recurring member.</p>
    <p>
      Feel free to browse through our menu, select your desired items, and proceed to place your
      order for convenient pickup at our store.
    </p>
    <p>After exploring our Menu, head over to the Cart to confirm your order.</p>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
}

p {
  font-size: 1.2em;
  line-height: 1.5;
  color: #555;
  margin-bottom: 20px;
}
</style>
