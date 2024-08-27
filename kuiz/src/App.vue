<script setup>
import { ref, watch } from "vue";
import quizesData from "./data/quizes.json";
import KuizCard from "./components/kuizCard.vue";

let quizes = ref(quizesData)
let search = ref("")

watch(search, () => {
  quizes.value = quizesData.filter((quiz) => {
    return quiz.title.toLowerCase().includes(search.value.toLowerCase())
  })
})
</script>

<template>
  <main>
    <header>
      <h1 id="title">Kuiz</h1>
      <input v-model.trim="search" type="text" id="search-input">
    </header>
    <section id="quiz-container">
      <KuizCard v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"></KuizCard>
    </section>
  </main>
</template>

<style scoped>
main {
  max-width: 900px;
  margin: 0 auto;
}

header {
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

#title {
  font-weight: bold;
  margin-right: 30px;
}

#quiz-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

#search-input {
  border: none;
  background-color: #8080809c;
  padding: 10px;
  border-radius: 5%;
}

</style>