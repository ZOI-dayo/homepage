<script setup lang="ts">
import type { Achivement } from "../types/Achivement.ts";

defineProps<{
  achivements: Achivement[];
}>();
</script>

<template>
  <div class="relative w-full">
    <div
      class="absolute left-[calc(12rem-1px)] h-full border-l-2 border-text-secondary"
    ></div>
    <div
      v-for="achivement in achivements"
      :key="achivement.title"
      class="relative flex h-16 items-center"
    >
      <div class="w-40 text-right text-xl font-extrabold text-text-secondary">
        {{ achivement.date }}
      </div>
      <div
        class="m-4 flex size-8 items-center justify-center rounded-full bg-text-secondary"
      >
        <div
          class="flex size-6 items-center justify-center rounded-full bg-background"
        >
          <div class="size-2 rounded-full bg-text-secondary"></div>
        </div>
      </div>
      <div class="text-xl font-black">{{ achivement.title }}</div>
    </div>
  </div>
  <div class="relative h-8 w-full">
    <div
      class="absolute left-[calc(12rem-1px)] h-full border-l-2 border-dotted border-text-secondary"
    ></div>
  </div>
</template>

<style scoped></style>
