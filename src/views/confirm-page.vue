<template>
  <div class="center-container">
    <div class="confirm-box">
      <h1 class="confirm-message">Order has been confirmed and placed!</h1>
      <h1 class="confirm-message">
        If you wish to place another order navigate to our "Menu" by clicking the top right.
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.center-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.confirm-box {
  border: 1px solid #ccc;
  background-color: #f8f8f8;
  padding: 15px;
  border-radius: 8px;
}

.confirm-message {
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding: 0;
}
</style>
