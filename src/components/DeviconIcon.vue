<script setup lang="ts">
import { type Component, computed } from "vue";
import VuejsIcon from "./devicon/VuejsIcon.vue";
import TailwindcssIcon from "./devicon/TailwindcssIcon.vue";
import type { Devicon } from "../types/Devicon.ts";
import AmazonwebservicesIcon from "./devicon/AmazonwebservicesIcon.vue";
import KubernetesIcon from "./devicon/KubernetesIcon.vue";
import UnityIcon from "./devicon/UnityIcon.vue";
import CSharpIcon from "./devicon/CSharpIcon.vue";
import FlutterIcon from "./devicon/FlutterIcon.vue";
import GoIcon from "./devicon/GoIcon.vue";
import MySQLIcon from "./devicon/MySQLIcon.vue";
import DartIcon from "./devicon/DartIcon.vue";

const props = defineProps<{
  icon: Devicon;
}>();

type SvgMap = {
  [key in Devicon]: Component;
};
const svgMap: SvgMap = {
  vuejs: VuejsIcon,
  tailwindcss: TailwindcssIcon,
  amazonwebservice: AmazonwebservicesIcon,
  kubernetes: KubernetesIcon,
  unity: UnityIcon,
  csharp: CSharpIcon,
  flutter: FlutterIcon,
  go: GoIcon,
  mysql: MySQLIcon,
  dart: DartIcon,
};
const Icon = computed(() => svgMap[props.icon]);
</script>

<template>
  <Icon />
</template>

<style scoped></style>
