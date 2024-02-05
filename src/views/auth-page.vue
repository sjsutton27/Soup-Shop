<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <p v-if="!formIsValid" class="error">
        Please enter valid Email and Password (password must at least have 6 characters, one
        Uppercase, and one Special character)
      </p>
      <label for="email">E-Mail</label>
      <input type="email" id="email" v-model.trim="email" />
    </div>
    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" id="password" v-model.trim="password" />
    </div>
    <button class="login-button">{{ submitButtonCaption }}</button>
    <button class="signup-button" type="button" mode="flat" @click="switchAuthMode">
      {{ switchModeButtonCaption }}
    </button>
    <button v-if="isLoggedIn" class="logout-button" @click="logout">Logout</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      mode: "login"
    }
  },
  computed: {
    //For user login button checks if user is login or needs to signup
    submitButtonCaption() {
      if (this.mode === "login") {
        return "Login"
      } else {
        return "SignUp"
      }
    },
    //Tells user to signup or login based on what the user needs to do
    switchModeButtonCaption() {
      if (this.mode === "login") {
        return "SignUp"
      } else {
        return "Login"
      }
    },
    isLoggedIn() {
      console.log("isLoggedIn:", this.$store.getters.isAuthenticated)
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    async submitForm() {
      // Checks if email is valid
      if (this.email === "" || !this.email.includes("@")) {
        this.formIsValid = false
        return
      }

      //Checks if password meets requirements (at least 6 characters, one uppercase letter, and one special character)
      const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/
      if (!passwordRegex.test(this.password)) {
        this.formIsValid = false
        return
      }
      //send http request...
      if (this.mode === "login") {
        await this.$store.dispatch("authentication/login", {
          email: this.email,
          password: this.password
        })
      } else {
        //dispatches our action.js in auth modules
        await this.$store.dispatch("authentication/register", {
          email: this.email,
          password: this.password
        })
      }
    },
    switchAuthMode() {
      //mode is to see if the user is logging in or signing up
      if (this.mode === "login") {
        this.mode = "signup"
      } else {
        this.mode = "login"
      }
    },
    logout() {
      this.$store.dispatch("authentication/logout")
    }
  }
}
</script>
<style scoped>
form {
  margin: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.login-button {
  background-color: #04aa94;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}
.signup-button {
  background-color: #04aa49;
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
.error {
  color: red;
  border: solid 1px orangered;
  background-color: #ffffcc;
}
</style>
