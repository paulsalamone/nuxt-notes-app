<template>
  <div>
    <div class="write-note">
      <h2>Write a note:</h2>
      <form action="submit" @submit.prevent="handleNote">
        <input type="text" placeholder="title" v-model="title" />
        <textarea type="text" placeholder="note" v-model="text" />
        <button type="submit">post</button>
      </form>
    </div>
    <div class="notes-grid">
      <div v-for="(note, index) in allNotes" :key="index" class="note">
        <h3>{{ note.title }}</h3>
        <p>{{ note.text }}</p>
      </div>
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
@import "../../assets/styles/index.scss";

.write-note {
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  * {
    margin: 5px;
  }

  input {
    width: 200px;
    padding: 10px;
  }

  textarea {
    width: 300px;
    height: 150px;
    padding: 10px;
  }

  button {
    width: 150px;
    padding: 5px 10px;
  }
}

.notes-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.note {
  h3,
  p {
    margin: 0;
  }
  margin: 10px;
  padding: 15px;
  width: 90%;
  border-radius: 5px;
  border: 1px dotted $warm-gray2;
  box-shadow: 0 0 5px $warm-gray1;
}
</style>