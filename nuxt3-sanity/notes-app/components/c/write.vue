<template>
  <div>
    <h2>Write a note:</h2>
    <form action="submit" @submit.prevent="handleNote">
      <input type="text" placeholder="title" v-model="title" />
      <textarea type="text" placeholder="note" v-model="text" />
      <button type="submit">post</button>
    </form>
    <div v-for="(note, index) in allNotes" :key="index">
      <h3>{{ note.title }}</h3>
      <p>{{ note.text }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { useNotesStore } from "~/stores/notesStore";

export default {
  name: "write",
  setup() {
    const store = useNotesStore();
    const allNotes = ref(store.notes.reverse());
    const title = ref("");
    const text = ref("");
    const output = ref([title, text]);
    function handleNote() {
      console.log(title.value, text.value);
      store.addNote(title.value, text.value);
    }
    return {
      title,
      text,
      handleNote,
      allNotes,
    };
  },
};
</script>

<style lang="scss">
form {
  display: flex;
  flex-direction: column;
  width: 300px;
  * {
    margin: 5px;
  }
  button {
    width: 200px;
  }
}
</style>