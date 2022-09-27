<template>
  <div class="other-template-border">
    <main>
      <p><i>other layout</i></p>
      <slot name="main-slot" />
    </main>
  </div>
</template>

<style lang="scss" >
@import "../assets/styles/index.scss";
.other-template-border {
  border: 5px dotted $warm-gray3;
  color: white;
  background-color: $warm-gray2;
  padding: 20px;
  margin: 5px;
  height: 80vh;
  margin: auto;
}
</style>