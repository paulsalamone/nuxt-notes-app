<template>
  <div class="cloner">
    <h1>Sentence Cloner</h1>
    <form action="submit" @submit.prevent="handleInput">
      <label for="suggestion">Enter a sentence to parse: </label><br />
      <input type="text" v-model="suggestion" placeholder="here" />
      <button type="submit">submit</button>
    </form>
    <p>i.e.</p>
    <p>This is a cool sentence about whales</p>
    <h2>OUTPUT:</h2>
    <p>
      <i>{{ posOutput }}</i>
    </p>
    <p v-for="(sentence, index) in output" :key="index">{{ sentence }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import rita from "rita";

export default defineComponent({
  name: "cloner-view",
  components: {},
  data(): {
    suggestion: string;
    posOutput: [string];
    output: [string];
  } {
    return {
      suggestion: "",
      posOutput: [""],
      output: [""],
    };
  },
  computed: {},
  methods: {
    handleInput(): void {
      this.output = [""];
      this.posOutput = [""];

      const tokens = rita.tokenize(this.suggestion);
      const posList = tokens.map((e: string) => {
        const pos = this.definePos(e);
        return pos;
      });
      this.posOutput.push(posList);

      for (let i = 0; i < 5; i++) {
        this.output.push(this.createSentence(posList) + ".");
      }
    },
    definePos(token: string): string {
      return rita.pos(token);
    },
    createSentence(posList: []): string {
      let sentence = "";
      for (let i = 0; i < posList.length; i++) {
        const posType = posList[i][0];
        sentence += this.randWord(posType) + " ";
      }
      console.log(sentence);
      return sentence;
    },
    randWord(posType: string): string {
      if (posType === "dt") {
        return "the";
      } else {
        return rita.randomWord({ pos: posType, numSyllables: 1 });
      }
    },
  },
});
</script>

<style lang="scss">
input {
  margin: 5px;
  padding: 3px 6px;
  width: 90%;
}
</style>