<template>
  <div>
    <p>from database:</p>

    <div class="notes-grid">
      <div v-for="(note, index) in notes" :key="index" class="note">
        <h3>{{ note.title }}</h3>
        <p>{{ note.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "notes",
  setup() {
    const ding = "hallo, ding!";

    const query = groq`*[_type == "note"]`;

    const { data } = useSanityQuery(query);

    const output = data._rawValue;

    const notes = ref(output);

    console.table(notes);

    return {
      ding,
      notes,
    };
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/index.scss";

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