<template>
  <div>
    <nav class="navbar">
      <div class="logo">
        <img src="../assets/images/soup-logo.jpg" alt="Logo Image" class="logo-img" />
        <div class="logo-title">{{ logo }}</div>
      </div>
      <ul class="nav-list">
        <template v-for="nav in navItems">
          <li :key="nav" v-if="!isLoggedIn || nav !== 'Authentication'">
            <router-link :to="getRoute(nav)" class="nav-item">
              {{ nav }}
            </router-link>
          </li>
        </template>
        <li v-if="isLoggedIn">
          <button class="logout-button" @click="logout">Logout</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //NavBar Items and Routes to the other pages
      logo: "Soup Shop",
      navItems: ["Home", "Menu", "Cart", "Authentication"],
      routes: {
        Home: "/",
        Menu: "/menu",
        Cart: "/cart",
        Authentication: "/auth"
      }
    }
  },
  computed: {
    //checks if a user is login or not, using the isAuthenticated getter from Vuex store
    isLoggedIn() {
      console.log(this.$store.getters.isAuthenticated)
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    //gets routes from Router
    getRoute(nav) {
      return this.routes[nav]
    },
    //dispatches to the logout Action Function in authentication/actions.js and routes back to homepage after user clicks logout
    logout() {
      this.$store.dispatch("logout")
      this.$router.replace("/home")
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

.logout-button {
  font: bold;
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

.logout-button:hover {
  background-color: orangered;
  color: yellow;
  border: 1px solid coral;
}
</style>
