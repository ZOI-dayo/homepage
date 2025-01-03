<script setup lang="ts">
import type { Achievement } from "../types/Achievement.ts";
import TrapIcon from "./Icons/TrapIcon.vue";
import XIcon from "./Icons/XIcon.vue";
import GithubIcon from "./Icons/GithubIcon.vue";
import AtcoderIcon from "./Icons/AtcoderIcon.vue";
import PrimaryButton from "./PrimaryButton.vue";
import { ref } from "vue";

const viewAll = ref<boolean>(false);

const toggleViewAll = () => {
  viewAll.value = !viewAll.value;
};

const colorMap = [
  "bg-transparent", // 0
  "bg-transparent", // 1
  "bg-text-secondary/10", // 2
  "bg-text-secondary/10", // 3
  "bg-text-secondary/25", // 4
  "bg-text-secondary/50", // 5
  "bg-text-secondary/75", // 6
  "bg-text-secondary", // 7
  "bg-text-primary", // 8
  "bg-text-primary", // 9
  "bg-text-primary", // 10
];

const achievements: Achievement[] = [
  {
    priority: 7,
    date: "2024.12.08",
    title: "ISUCON14 全体115位 / 学生10位",
  },
  {
    priority: 5,
    date: "2024.10.26",
    title: "AtCoder 青色到達",
    links: {
      atcoder: "https://atcoder.jp/users/ZOIZOI/history/share/abc377",
      x: "https://x.com/ZOI_dayo/status/1850178630565183963",
    },
  },
  {
    priority: 5,
    date: "2024.07.17",
    title: "traP機械学習講習会コンペ 学内2位",
    links: {
      trap: "https://trap.jp/post/2286/",
    },
  },
  {
    priority: 3,
    date: "2024.07.05",
    title: "ICPC2024国内予選 148位 / 部内18位",
  },
  {
    priority: 8,
    date: "2024.06.16",
    title: "traP春ハッカソン 最優秀賞 『発火村』",
    links: {
      trap: "https://trap.jp/post/2255/",
      github: "https://github.com/traP-jp/hakka-mura",
    },
  },
  {
    priority: 6,
    date: "2024.04.21",
    title: "CPCTF2024 10位・新入生内1位",
    links: {
      trap: "https://trap.jp/post/2224/",
    },
  },
  {
    priority: 3,
    date: "2024.04.01",
    title: "東京工業大学 情報理工学院 入学",
  },
  {
    priority: 4,
    date: "2023.12.23",
    title: "AtCoder Junior League 2023 高3内12位",
    links: {
      atcoder: "https://img.atcoder.jp/ajl2023/output_personal_grade6.html",
    },
  },
  {
    priority: 3,
    date: "2023.11.11",
    title: "パソコン甲子園2023 プログラミング部門 本戦出場",
  },
  {
    priority: 4,
    date: "2023.08.12",
    title: "AtCoder 水色到達",
  },
  {
    priority: 3,
    date: "2023.02.19",
    title: "AtCoder 緑色到達",
  },
  {
    priority: 3,
    date: "2022.12.11",
    title: "日本情報オリンピック 2022/2023 二次予選出場",
  },
  {
    priority: 7,
    date: "2022.11.06",
    title: "パソコン甲子園2022 モバイル部門 ベストデザイン賞・協賛企業賞",
  },
  {
    priority: 7,
    date: "2022.02.22",
    title:
      "第24回全国中学高校Webコンテスト 高校生の部金賞 『右ポケットの中の資源を求めて』",
  },
  {
    priority: 3,
    date: "2021.12.24",
    title: "2級ウェブデザイン技能検定 合格",
  },
  {
    priority: 3,
    date: "2021.04.01",
    title: "甲陽学院高校 入学",
  },
  {
    priority: 3,
    date: "2018.04.01",
    title: "甲陽学院中学校 入学",
  },
  {
    priority: 1,
    date: "2005.08.15",
    title: "生誕",
  },
];
</script>

<template>
  <div class="relative h-4 w-full">
    <div
      class="absolute left-[calc(6rem-1px)] h-full border-l-2 border-text-secondary xl:left-[calc(13rem-1px)]"
    />
  </div>
  <div class="relative w-full">
    <div
      v-for="achievement in viewAll
        ? achievements
        : achievements.filter((e) => e.priority >= 5).slice(0, 5)"
      :key="achievement.title"
      class="relative flex h-16 items-center rounded-xl px-4 transition duration-200 ease-in-out hover:bg-primary/50"
    >
      <div
        class="w-16 shrink-0 text-right text-xs font-extrabold text-text-secondary xl:w-40 xl:text-xl"
      >
        {{ achievement.date }}
      </div>
      <div
        class="absolute left-[calc(6rem-1px)] top-0 h-6 shrink-0 border-l-2 border-text-secondary xl:left-[calc(13rem-1px)] xl:h-4"
      />
      <div
        class="m-2 flex size-4 shrink-0 items-center justify-center rounded-full bg-text-secondary xl:m-4 xl:size-8"
      >
        <div
          class="flex size-3 items-center justify-center rounded-full bg-background xl:size-6"
        >
          <div
            class="size-2 rounded-full"
            :class="colorMap[achievement.priority]"
          ></div>
        </div>
      </div>
      <div
        class="absolute bottom-0 left-[calc(6rem-1px)] h-6 shrink-0 border-l-2 border-text-secondary xl:left-[calc(13rem-1px)] xl:h-4"
      />
      <div class="truncate font-black xl:text-xl">{{ achievement.title }}</div>
      <div class="ml-4 flex shrink-0 gap-3 xl:ml-8">
        <a
          v-if="achievement.links?.trap != undefined"
          :href="achievement.links.trap"
        >
          <TrapIcon class="size-4 xl:size-6" />
        </a>
        <a
          v-if="achievement.links?.github != undefined"
          :href="achievement.links.github"
        >
          <GithubIcon class="size-4 xl:size-6" />
        </a>
        <a v-if="achievement.links?.x != undefined" :href="achievement.links.x">
          <XIcon class="size-4 xl:size-6" />
        </a>
        <a
          v-if="achievement.links?.atcoder != undefined"
          :href="achievement.links.atcoder"
        >
          <AtcoderIcon class="size-4 xl:size-6" />
        </a>
      </div>
    </div>
  </div>
  <div v-if="!viewAll" class="relative h-8 w-full">
    <div
      class="absolute left-[calc(6rem-1px)] h-full border-l-2 border-dashed border-text-secondary xl:left-[calc(13rem-1px)]"
    />
  </div>
  <div class="mt-8 place-items-center">
    <PrimaryButton @click="toggleViewAll"
      >{{ viewAll ? "Collapse" : "View All" }}
    </PrimaryButton>
  </div>
</template>

<style scoped></style>
