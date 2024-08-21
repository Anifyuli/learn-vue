<script setup>
import { ref } from 'vue';
import MemoDialog from './MemoDialog.vue';

let memos = ref([]);
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">Memo</a>
    </div>
    <div class="flex-none">
      <button class="btn" onclick="add_modal.showModal()">
        <p>Add + </p>
      </button>
      <MemoDialog v-model:memos="memos" />
    </div>
  </div>
</template>

<style scoped></style>