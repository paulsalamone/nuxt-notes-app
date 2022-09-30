<template>
  <div class="default-template-border">
    <main>
      <!-- <p><i>default layout</i></p> -->

      <slot name="main-slot" />
    </main>
  </div>
</template>

<style lang="scss" >
@import "../assets/styles/index.scss";
.default-template-border {
  border: 5px solid $warm-gray1;
  padding: 20px;
  margin: 5px;
  //   height: 80vh;
  margin: auto;
}
</style>