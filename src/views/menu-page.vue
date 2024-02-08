<template>
  <div id="menu">
    <h1 class="menu-heading">Menu</h1>
    <div class="card" v-for="item in menuItems" :key="item.id">
      <img class="menu-item-img" :src="item.image" alt="Menu Item" />
      <p>
        <span>{{ item.name }}</span
        ><br />
        <span>{{ item.price }}</span
        ><br />
        <span
          >Quantity:
          <input type="number" min="0" v-model="item.quantity" />
        </span>
        <br />
      </p>
      <button
        class="add-cart"
        @click="addToCart(item.id, item.image, item.name, item.quantity, item.price)"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //Our selection of Items to choose from
      menuItems: [
        {
          id: 1,
          name: "Bean Beef Chili",
          price: 7.99,
          quantity: 0,
          image: "/assets/images/Bean-Beef-Chili.jpg"
        },
        {
          id: 2,
          name: "Chicken Noodle Soup",
          price: 5.99,
          quantity: 0,
          image: "/assets/images/chicken-noodle-soup.jpg"
        },
        {
          id: 3,
          name: "Naruto Soup Special",
          price: 6.99,
          quantity: 0,
          image: "/assets/images/naruto-soup.jpg"
        },
        {
          id: 4,
          name: "Potato Cheese Soup",
          price: 6.25,
          quantity: 0,
          image: "/assets/images/potato-cheese-soup.jpg"
        },
        {
          id: 5,
          name: "Potato Leek Soup",
          price: 6.99,
          quantity: 0,
          image: "/assets/images/potato-leek.jpg"
        },
        {
          id: 6,
          name: "Tomato Soup",
          price: 5.25,
          quantity: 0,
          image: "/assets/images/Tomato-Soup.jpg"
        }
      ]
    }
  },
  methods: {
    //what each item has
    addToCart(idItem, imageItem, nameItem, quantityItem, priceItem) {
      const id = idItem
      const image = imageItem
      const name = nameItem
      const quantity = quantityItem
      const price = priceItem

      // Check if quantity is not a positive integer
      if (!Number.isInteger(quantity) || quantity < 0) {
        alert("Quantity must be a non-negative and can't have a decimal.")
        return
      }

      this.$store.commit("cart/setItemInCart", { id, image, name, quantity, price })
    }
  }
}
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
}
.menu-heading {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
}
.card {
  border: 1px solid black;
  border-radius: 20px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  background-color: lightgray;
}

.menu-item-img {
  max-width: 200px;
  border-radius: 20px;
  padding: 10px;
}

.add-cart {
  background-color: rgb(255, 166, 0);
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
  opacity: 0.8;
}
</style>
