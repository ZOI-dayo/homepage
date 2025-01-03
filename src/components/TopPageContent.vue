<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>

<template>
  <div class="my-16">
    <div class="mb-12 flex items-center">
      <span class="text-4xl font-extrabold xl:text-6xl">{{ title }}</span>
      <hr class="m-4 grow text-text-secondary" />
      <span class="font-black text-text-secondary xl:text-2xl">{{
        subtitle
      }}</span>
    </div>
    <slot />
  </div>
</template>

<style scoped></style>
