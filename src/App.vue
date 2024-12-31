<script setup lang="ts">
import TopPageContent from "./components/TopPageContent.vue";
import WorkTile from "./components/WorkTile.vue";
import PrimaryButton from "./components/PrimaryButton.vue";
import type { Work } from "./types/Work.ts";
import type { Achivement } from "./types/Achivement.ts";
import AchivementTimeline from "./components/AchivementTimeline.vue";

const works: Work[] = [
  {
    title: "traP Online Judge",
    role: "Infra Team Leader & Frontend Team",
    description:
      "traP内で開発中のオンラインジャッジサービス\n2025年春 v0リリース予定",
  },
  {
    title: "Antonym (仮)",
    role: "Programmer Team",
    description:
      "「プレイする映画」を提供するミステリーアドベンチャー\n2025年夏 テストプレイ版リリース予定",
  },
  {
    title: "(Secret)",
    role: "Frontend Team",
    description:
      "スケジュールを自動で構築する、新時代タスク管理アプリ\n2025年春 正式リリース予定",
  },
  {
    title: "traPortfolio",
    role: "Backend Team",
    description: "traP部員のためのポートフォリオサービス\n2024年7月 リリース",
  },
];

const achivements: Achivement[] = [
  {
    date: "2024.12.08",
    title: "ISUCON14 (全体115位 / 学生10位)",
  },
  {
    date: "2024.10.26",
    title: "AtCoder 青色 到達",
  },
];
</script>

<template>
  <div
    class="min-h-screen w-screen bg-background font-primary text-text-primary"
  >
    <div class="flex h-screen w-screen items-center justify-center">
      <div
        class="flex h-[50rem] w-[75rem] flex-col items-center justify-center gap-24 border-x-2 border-text-secondary"
      >
        <img
          src="/zoi_icon.png"
          width="400"
          height="400"
          class="rounded-[64px]"
          alt="logo"
        />
        <span class="text-8xl font-extrabold">ZOI_dayo</span>
        <div class="flex w-full">
          <div class="flex grow items-center justify-center gap-4">
            <img src="./assets/x_logo.svg" class="inline size-8" />
            <span class="font-mono text-2xl">@ZOI_dayo</span>
          </div>
          <div class="flex grow items-center justify-center gap-4">
            <img src="./assets/x_logo.svg" class="inline size-8" />
            <span class="font-mono text-2xl">@ZOI_dayo</span>
          </div>
          <div class="flex grow items-center justify-center gap-4">
            <img src="./assets/x_logo.svg" class="inline size-8" />
            <span class="font-mono text-2xl">@ZOI_dayo</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-screen flex-col items-center py-8">
      <div class="w-[75rem]">
        <TopPageContent title="About" subtitle="自己紹介">
          <p>
            東京科学大学 学部1年 (24B) / traP<br />
            <br />
            中高でWebフロントエンドと競技プログラミングに触れ、大学に入ってからWebバックエンドにも挑戦しています。
          </p>
        </TopPageContent>
        <TopPageContent title="Works" subtitle="作品">
          <div class="grid w-full grid-cols-2 gap-8">
            <WorkTile v-for="work in works" :key="work.title" :work="work" />
          </div>
          <div class="mt-8 place-items-center">
            <PrimaryButton>View all</PrimaryButton>
          </div>
        </TopPageContent>
        <TopPageContent title="Achievements" subtitle="実績">
          <AchivementTimeline :achivements="achivements" />
          <div class="mt-8 place-items-center">
            <PrimaryButton>View all</PrimaryButton>
          </div>
        </TopPageContent>
        <TopPageContent title="Activities" subtitle="その他の活動">
          <div class="mt-8 place-items-center">
            <PrimaryButton>View all</PrimaryButton>
          </div>
        </TopPageContent>
        <TopPageContent title="Certification" subtitle="資格">
          <div
            class="y inline-flex h-12 place-items-center rounded-lg border-2 border-secondary px-5 font-extrabold"
          >
            2級Webデザイン技能士
          </div>
        </TopPageContent>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
