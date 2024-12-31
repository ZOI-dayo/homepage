<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>

<template>
  <div class="my-16">
    <div class="mb-12 flex items-center">
      <span class="text-6xl font-extrabold">{{ title }}</span>
      <hr class="m-4 grow text-text-secondary" />
      <span class="text-2xl font-black text-text-secondary">{{
        subtitle
      }}</span>
    </div>
    <slot />
  </div>
</template>

<style scoped></style>
