<script setup>
import { ref } from 'vue';

let memos = ref([])

</script>

<template>
  <div class="card bg-base-100 w-96 shadow-xl mx-2 my-5">
    <div class="card-body">
      <h2 class="card-title">Memo title</h2>
      <p>{{ memos }}</p>
      <h3 class="font-bold italic" >Sunday, 18th August 2024</h3>
    </div>
  </div>
</template>

<style scoped></style>