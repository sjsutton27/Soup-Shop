<template>
  <form @submit.prevent="submit">
    <label for="">Email</label>
    <input type="text" v-model="form.email" required />
    <br />
    <label for="">Password</label>
    <input type="password" v-model="form.password" required />
    <br />
    <button type="submit">{{ $store.state.authentication.email ? "Logout" : "Login" }}</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    submit() {
      if (this.$store.getters["authentication/getEmail"]) {
        this.$store.commit("authentication/isLogout")
        this.form.email = "" // clear the input after login
        this.form.password = "" // clear the input after login
      } else {
        this.$store.commit("authentication/isLogin", this.form.email)
      }
    }
  },
  mounted() {
    this.$store.commit("authentication/initializeStore")
  }
}
</script>

<style scoped>
form {
  border: 3px solid #f1f1f1;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}
</style>
