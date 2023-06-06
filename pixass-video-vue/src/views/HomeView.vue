<template>
  <main>
    <!-- <canvas ref="canvas" class="canvas"></canvas> -->
    <button @click="refreshPage">Refresh</button>
  </main>
</template>



<script setup>
import * as p5 from 'p5'
import { onMounted, ref } from 'vue'

const refreshPage = () => location.reload();

onMounted(() => {
  const sketch = (p5) => {
    let capture;
    const videoWidth = 700;
    const videoHeight = 480;

    p5.setup = () => {

      p5.frameRate(20)
      p5.createCanvas(270, 480); // -- 25%
      capture = p5.createCapture(p5.VIDEO);
      capture.hide();
    }


    // x, y, d
    const circles = [{ x: 135, y: 240, d: rand(30), a: .5 }]

    p5.draw = () => {
      p5.background("white");
      p5.image(capture, -videoWidth / 3, 0, videoWidth, videoHeight);



      for (let k = 0; k < circles.length; k++) {
        p5.strokeWeight(0);
        p5.fill(`rgba(270,270,270, ${circles[k].a})`)
        p5.circle(circles[k].x, circles[k].y + 10, circles[k].d)
      }


      circles.push({ x: rand(270), y: rand(480), d: rand(30), a: randA() })


      // END DRAW
    }

    function rand(maxRange) {
      return Math.floor(Math.random() * (maxRange + 1));
    }

    function randA() {
      return Math.random() * 0.9 + 0.1;
    }





  }

  new p5(sketch)
})

</script>

<style>
.canvas {
  border: 1px solid black;
}
</style>
