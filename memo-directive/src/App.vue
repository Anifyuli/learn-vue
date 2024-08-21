<script setup>
import Navbar from './components/MemoNavbar.vue';
import MemoCard from './components/MemoCard.vue';

</script>

<template>
  <Navbar></Navbar>
  <main class="mx-5">
    <MemoCard @memos="(memo) => { memos = memo; }" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
}
</style>
