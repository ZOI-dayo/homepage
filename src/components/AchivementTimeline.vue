<script setup lang="ts">
import type { Achivement } from "../types/Achivement.ts";
import TrapIcon from "./Icons/TrapIcon.vue";
import XIcon from "./Icons/XIcon.vue";
import GithubIcon from "./Icons/GithubIcon.vue";
import AtcoderIcon from "./Icons/AtcoderIcon.vue";

defineProps<{
  achivements: Achivement[];
}>();
</script>

<template>
  <div class="relative h-4 w-full">
    <div
      class="absolute left-[calc(12rem-1px)] h-full border-l-2 border-text-secondary"
    />
  </div>
  <div class="relative w-full">
    <div
      v-for="achivement in achivements"
      :key="achivement.title"
      class="relative flex h-16 items-center rounded-xl transition duration-200 ease-in-out hover:bg-primary/50"
    >
      <div class="w-40 text-right text-xl font-extrabold text-text-secondary">
        {{ achivement.date }}
      </div>
      <div
        class="absolute left-[calc(12rem-1px)] top-0 h-4 border-l-2 border-text-secondary"
      />
      <div
        class="m-4 flex size-8 items-center justify-center rounded-full bg-text-secondary"
      >
        <div
          class="flex size-6 items-center justify-center rounded-full bg-background"
        >
          <div class="size-2 rounded-full bg-text-secondary"></div>
        </div>
      </div>
      <div
        class="absolute bottom-0 left-[calc(12rem-1px)] h-4 border-l-2 border-text-secondary"
      />
      <div class="text-xl font-black">{{ achivement.title }}</div>
      <div class="ml-4 flex gap-3">
        <a
          v-if="achivement.links?.trap != undefined"
          :href="achivement.links.trap"
        >
          <TrapIcon class="size-6" />
        </a>
        <a
          v-if="achivement.links?.github != undefined"
          :href="achivement.links.github"
        >
          <GithubIcon class="size-6" />
        </a>
        <a v-if="achivement.links?.x != undefined" :href="achivement.links.x">
          <XIcon class="size-6" />
        </a>
        <a
          v-if="achivement.links?.atcoder != undefined"
          :href="achivement.links.atcoder"
        >
          <AtcoderIcon class="size-6" />
        </a>
      </div>
    </div>
  </div>
  <div class="relative h-8 w-full">
    <div
      class="absolute left-[calc(12rem-1px)] h-full border-l-2 border-dashed border-text-secondary"
    />
  </div>
</template>

<style scoped></style>
