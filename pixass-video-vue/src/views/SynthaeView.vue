<template>
  <div class="about">
    <h3>cünthay</h3>
    <button @mousedown="handleNoteOn" @mouseup="handleNoteOff">TAP</button>
    {{ noteOn }}
  </div>
</template>

<script setup>
import * as p5 from 'p5'
import { onMounted,ref } from 'vue'

const noteOn = ref(false);

const handleNoteOn = () => {
  console.log("ON")
  noteOn.value = true
}

const handleNoteOff = () => {
  console.log("OFF")
    noteOn.value = false

}

onMounted(() => {

  const sketch = (p5) => {
 
    p5.setup = () => {
      p5.frameRate(20)
      p5.createCanvas(500, 330); 

 
    }

    p5.draw = () => {
          p5.background("rgba(0,0,0,.2)");
        p5.strokeWeight(0)
      if(noteOn.value){
        p5.circle(100,100,100)
      }
    }

  }

  new p5(sketch)

})


</script>

<style>

</style>
