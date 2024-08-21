<script setup>
import { defineEmits, ref } from 'vue';

const emit = defineEmits(['update:memos']);
let newMemo = ref("")
let memos = ref([])

function saveMemos() {
  memos.value.push({
    id: Date.now(),
    memo: newMemo.value,
    date: new Date().toUTCString(""),
    backgroundColor: generateColor()
  })
  newMemo.value = ""
  emit('update:memos', memos.value)
}

function generateColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}
</script>

<template>
  <dialog id="add_modal" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="text-lg font-bold">New Memo</h3>
      <div class="my-2">
        <textarea v-model="newMemo" name="memo" id="memo" placeholder="Type your memo here"
          class="textarea textarea-lg w-full max-w-lg"></textarea>
      </div>
      <div class="modal-dialog">
        <form method="dialog">
          <button @click="saveMemos" class="btn btn-block">Save</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<style scoped></style>