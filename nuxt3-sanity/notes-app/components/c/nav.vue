<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
  </nav>
</template>

<style lang="scss">
@import "../../assets/styles/index.scss";
nav {
  display: flex;
  justify-content: flex-end;
}
a {
  margin: 10px;
  font-size: 1.2rem;
  text-decoration: none;
  color: $warm-gray2;
}
</style>