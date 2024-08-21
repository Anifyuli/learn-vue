<script>

export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    // Increase count value
    increase() {
      this.count++
    },
    // Decrease count value
    decrease() {
      this.count--
    }
  }
}

</script>

<template>
  <main>
    <h1>Counter</h1>
    <span id="value">{{ count }}</span>
    <div>
      <button @click="decrease" id="decrement">-</button>
      <button @click="increase" id="increment">+</button>
    </div>
  </main>
</template>

<style scoped>
h1 {
  color: lightgray;
}

main {
  text-align: center;
}

button {
  margin: 10px;
  padding: 10px 15px;
  background-color: lightgray;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

button:hover {
  background-color: #f5f5dc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

#value {
  color: lightgrey;
  font-size: 28px;
  font-weight: bolder;
  margin: 10px;
}
</style>
