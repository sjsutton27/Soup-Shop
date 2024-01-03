<template>
  <form>
    <label for="email">Email</label>
    <input type="text" id="email" v-model="form.email" required placeholder="Email..." />
    <br />
    <label for="password">Password</label>
    <input
      type="password"
      id="password"
      v-model="form.password"
      required
      placeholder="Password..."
      pattern="^(?=.*[!@#$%^&*()_+{}|<>?:;])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
      title="Password must contain at least one special character, one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long."
    />
    <br />
    <label for="confirmPassword">Confirm Password</label>
    <input
      type="password"
      id="confirmPassword"
      v-model="form.confirmPassword"
      placeholder=" Confirm Password..."
    />
    <button type="submit">Sign Up</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        confirmPassword: ""
      }
    }
  },
  methods: {}
}
</script>

<style scoped>
.register-form {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
