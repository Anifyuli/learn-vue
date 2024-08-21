<script setup>
import MemoDialog from './MemoDialog.vue';

</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">Memo {{ memos }}</a>
    </div>
    <div class="flex-none">
      <button class="btn" onclick="add_modal.showModal()">
        <p>Add + </p>
      </button>
      <MemoDialog/>
    </div>
  </div>
</template>

<style scoped></style>