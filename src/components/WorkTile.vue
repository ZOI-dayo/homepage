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
    class="relative flex w-3/4 flex-col gap-4 rounded-lg border-2 border-secondary bg-primary xl:h-48 xl:w-full xl:flex-row"
  >
    <div
      v-if="work.image != undefined"
      class="relative flex aspect-square h-full items-center justify-center rounded-t-md bg-white xl:rounded-l-md xl:rounded-tr-none"
      :class="{ 'p-4': work.padding }"
    >
      <img
        :src="work.image"
        class="w-full"
        :class="{
          'rounded-t-md xl:rounded-l-md xl:rounded-tr-none': !work.padding,
        }"
      />
    </div>
    <NoImage
      v-if="work.image == undefined"
      class="aspect-square h-full xl:rounded-l-md"
    />
    <div class="absolute aspect-square w-full xl:h-full xl:w-auto">
      <div class="absolute flex size-full items-end justify-end p-2">
        <DeviconIcon
          v-for="technology in work.technologies"
          :key="technology"
          :icon="technology"
          :style="{
            '--tw-drop-shadow-color': 'var(--color-white)'
          }"
          class="size-6 pl-2 drop-shadow-md"
          :class="{
            'fill-primary': !work.dark,
            'fill-text-secondary': work.dark,
          }"
        />
      </div>
    </div>
    <div class="ml-2 py-4 xl:ml-0 xl:py-8">
      <span class="block text-xs text-text-secondary text-opacity-50">{{
        work.role
      }}</span>
      <span class="mt-1 block text-2xl font-extrabold xl:text-4xl">{{
        work.title
      }}</span>
      <p class="mt-4 whitespace-pre-wrap text-xs">
        {{ work.description }}
      </p>
    </div>
    <div v-if="work.developing" class="absolute left-[-2px] top-[-2px]">
      <svg
        class="size-16 fill-accent"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          :d="`M 64 0 L 0 64 L 0 ${64 - Math.sqrt(2) * 16} L ${64 - Math.sqrt(2) * 16} 0 Z`"
        />
      </svg>
      <span
        class="absolute -left-1.5 top-[18px] block h-4 w-16 -rotate-45 text-center text-[10px] font-extrabold"
        >developing</span
      >
    </div>
  </div>
</template>

<style scoped></style>
