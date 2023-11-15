<template>
  <div>
    <nav class="navbar">
      <div class="logo">
        <img src="../assets/images/soup-logo.jpg" alt="Logo Image" class="logo-img" />
        <div class="logo-title">{{ logo }}</div>
      </div>
      <ul class="nav-list">
        <li v-for="nav in navItems" :key="nav">
          <router-link :to="getRoute(nav)" class="nav-item">
            {{ nav }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: "Soup Shop",
      navItems: ["Home", "Menu", "Cart", "Login", "Register"],
      routes: {
        Home: "/",
        Menu: "/menu",
        Cart: "/cart",
        Login: "/login",
        Register: "/register"
      }
    }
  },
  methods: {
    getRoute(nav) {
      return this.routes[nav]
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: coral;
  padding: 10px;
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
}

.logo-img {
  width: 10%;
  height: 10%;
  margin-right: 5%;
}

.logo-title {
  font-size: 20px;
  font-weight: bold;
}

.nav-list {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
}

.nav-item {
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  color: coral;
  background-color: black;
  padding: 5px 10px;
  margin-right: 10px;
  display: inline-block;
  border: 1px solid transparent;
  border-radius: 5px;

  transition:
    background-color 0.1s,
    color 0.1s;
}

.nav-item:hover {
  background-color: orangered;
  color: yellow;
  border: 1px solid coral;
}
</style>
