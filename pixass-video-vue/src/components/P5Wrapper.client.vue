<template>
    <P5 :sketch="sketch" />
  </template>
  
  <script setup lang="ts">
  const props = defineProps(["sketch"]);
  const sketch = props.sketch;
  </script>
  