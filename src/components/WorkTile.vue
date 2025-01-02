<script setup lang="ts">
import type { Work } from "../types/Work.ts";
import NoImage from "./NoImage.vue";
import DeviconIcon from "./DeviconIcon.vue";

defineProps<{
  work: Work;
}>();
</script>

<template>
  <div
    class="relative flex h-48 gap-4 rounded-lg border-2 border-secondary bg-primary"
  >
    <div
      v-if="work.image != undefined"
      class="relative flex aspect-square h-full items-center justify-center rounded-l-md bg-white p-4"
    >
      <img :src="work.image" />
    </div>
    <NoImage
      v-if="work.image == undefined"
      class="aspect-square h-full rounded-l-md"
    />
    <div class="absolute aspect-square h-full">
      <div class="absolute flex size-full items-end justify-end p-2">
        <DeviconIcon
          v-for="technology in work.technologies"
          :key="technology"
          :icon="technology"
          class="size-6 fill-primary pl-2 drop-shadow-md"
        />
      </div>
    </div>
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
