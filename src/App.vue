<template>
  <nav-bar></nav-bar>
  <RouterView />
</template>
<script>
import navBar from "./components/NavBar.vue"
export default {
  components: { navBar }
}
</script>
