<template>
  <div id="menu">
    <div class="card" v-for="item in menuItems" :key="item.id">
      <img class="menu-item-img" :src="item.image" alt="Menu Item" />
      <p>
        <span>{{ item.name }}</span
        ><br />
        <span>{{ item.price }}</span
        ><br />
        <span>Quantity: <input type="number" min="0" :value="item.quantity" /></span>
        <br />
      </p>
      <button class="add-cart" @click="addToCart(item.id, item.quantity, item.price)">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          id: 1,
          name: "Bean Beef Chili",
          price: 7.99,
          quantity: 0,
          image: "src/assets/images/Bean-Beef-Chili.jpg"
        },
        {
          id: 2,
          name: "Chicken Noodle Soup",
          price: 5.99,
          quantity: 0,
          image: "src/assets/images/chicken-noodle-soup.jpg"
        },
        {
          id: 3,
          name: "Naruto Soup Special",
          price: 6.99,
          quantity: 0,
          image: "src/assets/images/naruto-soup.jpg"
        },
        {
          id: 4,
          name: "Potato Cheese Soup",
          price: 6.25,
          quantity: 0,
          image: "src/assets/images/potato-cheese-soup.jpg"
        },
        {
          id: 5,
          name: "Potato Leek Soup",
          price: 6.99,
          quantity: 0,
          image: "src/assets/images/potato-leek.jpg"
        },
        {
          id: 6,
          name: "Tomato Soup",
          price: 5.25,
          quantity: 0,
          image: "src/assets/images/Tomato-Soup.jpg"
        }
      ]
    }
  },
  methods: {
    addToCart(idItem, quantityItem, priceItem) {
      this.$store.commit("cart/setItemInCart", idItem, quantityItem, priceItem)
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid black;
  border-radius: 20px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  background-color: #f9f9f9;
}

.menu-item-img {
  max-width: 200px;
  border-radius: 20px;
  padding: 10px;
}

.add-cart {
  background-color: orange;
  border: 1px solid orangered;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px;
}

.router-text {
  color: white;
  text-decoration: none;
}

button:hover {
  background-color: #2980b9;
}
</style>
