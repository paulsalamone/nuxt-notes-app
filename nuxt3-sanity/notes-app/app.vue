<template>
  <div>
    <header>
      <h1>Notes App</h1>
      <h4>Built with Nuxt3 + Sanity.io</h4>
    </header>
    <c-nav />

    <NuxtPage />
  </div>
</template>

<script>
export default {
  asyncData({ $pinia }) {
    const store = useStore($pinia);
  },
  setup() {
    return {};
  },
};
</script>
<style lang="scss">
@import "../assets/styles/index.scss";

* {
  // border: 0.5px dotted gray;
  box-sizing: border-box;
}
i {
  color: $warm-gray3;
}
header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px;
  height: 100px;
  h1 {
    margin: 0px;

    font-size: 3rem;
    margin-top: 1.5rem;
  }
  h4 {
    margin-top: 0.5rem;
  }
  align-items: flex-start;
  padding: 0px 60px;
}
</style>