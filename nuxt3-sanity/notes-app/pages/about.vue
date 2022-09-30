<template #main-slot>
  <div>
    <NuxtLayout #main-slot>
      <h2>about</h2>
      <p>This is a page explaining what this is about.</p>
    </NuxtLayout>
  </div>
</template>

<script>
definePageMeta({
  layout: "other",
});
</script>