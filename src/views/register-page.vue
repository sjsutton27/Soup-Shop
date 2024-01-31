<template>
  <form @submit.prevent="submitForm" class="register-form">
    <div :class="{ invalid: !form.email.isValid }">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        v-model.trim="form.email.val"
        required
        placeholder="Email..."
        @blur="clearValidity('email')"
      />
      <p v-if="!form.email.isValid">Email must not be empty</p>
    </div>
    <div :class="{ invalid: !form.password.isValid }">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        v-model="form.password.val"
        @blur="clearValidity('password')"
        required
        placeholder="Password..."
        pattern="^(?=.*[!@#$%^&*()_+{}|<>?:;])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
        title="Password must contain at least one special character, one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long."
      />
      <p v-if="!form.password.isValid">Password must not be empty</p>
    </div>
    <div :class="{ invalid: !form.confirmPassword.isValid }">
      <label for="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        v-model="form.confirmPassword.val"
        placeholder="Confirm Password..."
        @blur="clearValidity('confirmPassword')"
        required
      />
      <p v-if="!form.confirmPassword.isValid">Confirm your password</p>
    </div>
    <button type="submit">Sign Up</button>
  </form>
</template>

<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      form: {
        email: {
          val: "",
          isValid: true
        },
        password: {
          val: "",
          isValid: true
        },
        confirmPassword: {
          val: "",
          isValid: true
        },
        formIsValid: true
      }
    }
  },
  methods: {
    clearValidity(input) {
      this.form[input].isValid = true
    },

    validateForm() {
      this.formIsValid = true
      if (this.form.email.val === "") {
        this.form.email.isValid = false
        this.formIsValid = false
      }
      if (this.form.password.val === "") {
        this.form.password.isValid = false
        this.formIsValid = false
      }
      if (
        this.form.confirmPassword.val === "" ||
        this.form.confirmPassword.val !== this.form.password.val
      ) {
        this.form.confirmPassword.isValid = false
        this.formIsValid = false
      }
    },

    submitForm() {
      this.validateForm()
      if (!this.formIsValid) {
        return
      }

      const formData = {
        email: this.form.email.val,
        password: this.form.password.val,
        confirmPassword: this.form.confirmPassword.val
      }

      this.$emit("save-data", formData)
    }
  }
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

.invalid label {
  color: red;
}

.invalid input {
  border: 1px solid red;
}
</style>
