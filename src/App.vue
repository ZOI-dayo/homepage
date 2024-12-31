<script setup lang="ts">
import TopPageContent from "./components/TopPageContent.vue";
import WorkTile from "./components/WorkTile.vue";
import PrimaryButton from "./components/PrimaryButton.vue";
import type { Work } from "./types/Work.ts";
import type { Achivement } from "./types/Achivement.ts";
import AchivementTimeline from "./components/AchivementTimeline.vue";
import XIcon from "./components/Icons/XIcon.vue";
import GithubIcon from "./components/Icons/GithubIcon.vue";
import AtcoderIcon from "./components/Icons/AtcoderIcon.vue";

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
    title: "ISUCON14 出場 (全体115位 / 学生10位)",
  },
  {
    date: "2024.10.26",
    title: "AtCoder 青色到達",
    links: {
      atcoder: "https://atcoder.jp/users/ZOIZOI/history/share/abc377",
      x: "https://x.com/ZOI_dayo/status/1850178630565183963",
    },
  },
  {
    date: "2024.07.17",
    title: "traP機械学習講習会コンペ 出場 (学内2位)",
    links: {
      trap: "https://trap.jp/post/2286/",
    },
  },
  {
    date: "2024.07.05",
    title: "ICPC2024国内予選 出場 (148位 / 部内18位)",
    links: {
      trap: "https://trap.jp/post/2286/",
    },
  },
  {
    date: "2024.06.16",
    title: "traP春ハッカソン 出場 『発火村』 (最優秀賞)",
    links: {
      trap: "https://trap.jp/post/2255/",
      github: "https://github.com/traP-jp/hakka-mura",
    },
  },
  {
    date: "2024.04.21",
    title: "CPCTF2024出場 (10位・新入生内1位)",
    links: {
      trap: "https://trap.jp/post/2224/",
    },
  },
  {
    date: "2023.11.11",
    title: "パソコン甲子園2023 プログラミング部門 本戦出場",
  },
  {
    date: "2023.08.12",
    title: "AtCoder 水色到達",
  },
  {
    date: "2023.02.19",
    title: "AtCoder 緑色到達",
  },
  {
    date: "2022.12.11",
    title: "JOI2022/2023 二次予選出場",
  },
  {
    date: "2022.11.06",
    title:
      "パソコン甲子園2022 モバイル部門 本戦出場 (ベストデザイン賞・協賛企業賞)",
  },
];

const activities: string[] = [
  "traP 代表補佐",
  // "GAME^3 Webフロント担当"
];

const certifications: string[] = [
  "AtCoder 2級 (Algo青)",
  "2級ウェブデザイン技能士",
];
</script>

<template>
  <div
    class="min-h-screen w-screen bg-background font-primary text-text-primary"
  >
    <div class="flex h-screen w-screen items-center justify-center">
      <div
        class="flex h-[40rem] w-[64rem] flex-col items-center justify-center gap-20 border-x-2 border-text-secondary"
      >
        <img
          src="/zoi_icon.png"
          width="320"
          height="320"
          class="rounded-[64px]"
          alt="logo"
        />
        <span class="text-6xl font-extrabold">ZOI_dayo</span>
        <div class="inline-flex gap-24">
          <a
            class="flex items-center justify-center gap-4"
            href="https://x.com/ZOI_dayo"
          >
            <XIcon class="inline size-8" />
            <span class="font-mono text-2xl">@ZOI_dayo</span>
          </a>
          <a
            class="flex items-center justify-center gap-4"
            href="https://atcoder.jp/users/ZOIZOI"
          >
            <AtcoderIcon class="inline size-8" />
            <span class="font-mono text-2xl">ZOIZOI</span>
          </a>
          <a
            class="flex items-center justify-center gap-4"
            href="https://github.com/ZOI-dayo"
          >
            <GithubIcon class="inline size-8" />
            <span class="font-mono text-2xl">@ZOI-dayo</span>
          </a>
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
          <div class="flex flex-wrap gap-4">
            <div
              v-for="activity in activities"
              :key="activity"
              class="inline-flex h-12 place-items-center rounded-lg border-2 border-secondary px-5 font-extrabold"
            >
              {{ activity }}
            </div>
          </div>
        </TopPageContent>
        <TopPageContent title="Certification" subtitle="資格">
          <div class="flex flex-wrap gap-4">
            <div
              v-for="certification in certifications"
              :key="certification"
              class="inline-flex h-12 place-items-center rounded-lg border-2 border-secondary px-5 font-extrabold"
            >
              {{ certification }}
            </div>
          </div>
        </TopPageContent>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
