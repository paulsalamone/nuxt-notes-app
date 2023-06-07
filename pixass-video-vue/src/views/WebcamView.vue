<template>
  <main>
    <div>
          <!-- <canvas ref="canvas" class="canvas"></canvas> -->
    </div>
    <div><button @click="refreshPage">Refresh</button>
</div>
  </main>
</template>

<script setup>
import * as p5 from 'p5'
// import { P5Capture } from 'p5.capture'

import { onMounted } from 'vue'

const refreshPage = () => location.reload();

onMounted(() => {
  // this.capture = new P5Capture();


  const sketch = (p5) => {
    // P5 SETUP
    let capture;
    const videoWidth = 700;
    const videoHeight = 480;
    const circles = [{ x: 135, y: 240, d: rand(50), a: .5 }]

    p5.setup = () => {
      p5.frameRate(20)
      p5.createCanvas(270, 480); 
      capture = p5.createCapture(p5.VIDEO);
      capture.hide();
    }

    // P5 ANIMATION
    p5.draw = () => {
      p5.background("white");

          if (p5.frameCount === 1) {
    // const capture = P5Capture.getInstance();
    // capture.start({
    //   format: "gif",
    //   duration: 100,
    // });
  }
      // video
      p5.image(capture, -videoWidth / 3, 0, videoWidth, videoHeight);

      // circles
      for (let k = 0; k < circles.length; k++) {
        p5.strokeWeight(0);
        p5.fill(`rgba(270,270,270, ${circles[k].a})`)
        p5.circle(circles[k].x, circles[k].y + 10, circles[k].d)
      }
      circles.push({ x: rand(270), y: rand(480), d: rand(50), a: randA() })
    }

    // P5 FUNCTIONS 
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
