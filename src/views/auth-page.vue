<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <p v-if="!formIsValid" class="error">
        Please enter valid Email and Password (password must at least have 6 characters, one
        Uppercase, and one Special character)
      </p>
      <label for="email">E-Mail</label>
      <input type="email" id="email" v-model.trim="email" placeholder="E-Mail..." />
    </div>
    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" id="password" v-model.trim="password" placeholder="Password..." />
    </div>
    <button class="login-button">{{ submitButtonCaption }}</button>
    <button class="signup-button" type="button" mode="flat" @click="switchAuthMode">
      {{ switchModeButtonCaption }}
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      //mode is used to see if the user is trying to login or sign up, set to login by default
      mode: "login"
    }
  },
  computed: {
    //Top Button (submit button) submits the form and bottom button switches the form signup or login
    submitButtonCaption() {
      // 1st button submits login or sign up
      if (this.mode === "login") {
        return "Login"
      } else {
        return "Signup"
      }
    },
    switchModeButtonCaption() {
      //2nd button Allows user to choose to sign up or login instead
      if (this.mode === "login") {
        return "Signup instead"
      } else {
        return "Login instead"
      }
    },
    isLoggedIn() {
      //Check if user is already login based on token
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
      try {
        if (this.mode === "login") {
          await this.$store.dispatch("login", {
            email: this.email,
            password: this.password
          })
        } else {
          //dispatches our action.js in auth modules
          await this.$store.dispatch("register", {
            email: this.email,
            password: this.password
          })
        }
        this.$router.replace("/home")
      } catch (err) {
        this.error = err.message || "Failed to authenticate, check your login"
      }
    },

    switchAuthMode() {
      //switches depending on what the user is doing
      if (this.mode === "login") {
        this.mode = "signup"
      } else {
        this.mode = "login"
      }
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
