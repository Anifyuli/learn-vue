<script setup>
import Navbar from './components/MemoNavbar.vue';
import MemoCard from './components/MemoCard.vue';
import { ref } from 'vue';

let memos = ref([]);
</script>

<template>
  <Navbar></Navbar>
  <main class="mx-5">
    <MemoCard :memos="memos" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
}
</style>
