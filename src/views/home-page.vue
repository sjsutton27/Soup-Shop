<template>
  <section>
    <h1>Home</h1>
    <p>message</p>
    <button @click="hello()">Hello</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World"
    }
  },
  methods: {
    hello() {
      alert("Hello, Seth")
    }
  }
}
</script>

<style scoped></style>
