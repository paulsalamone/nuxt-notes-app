<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
<h2>p5 projs</h2>
      <nav>
        <RouterLink to="/">Webcam</RouterLink>
        <RouterLink to="/synthae"> • Synthae</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style>

header {
  display: flex;
}
</style>