<script setup lang="ts">
import type { Work } from "../types/Work.ts";

defineProps<{
  work: Work;
}>();
</script>

<template>
  <div class="flex h-48 gap-4 rounded-lg border-2 border-secondary bg-primary">
    <img src="/zoi_icon.png" class="aspect-square h-full rounded-l-md" />
    <div class="py-8">
      <span class="block text-xs text-text-secondary text-opacity-50">{{
        work.role
      }}</span>
      <span class="mt-1 block text-4xl font-extrabold">{{ work.title }}</span>
      <p class="mt-4 whitespace-pre-wrap text-xs">
        {{ work.description }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
