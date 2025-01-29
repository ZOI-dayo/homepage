<script setup lang="ts">
import TopPageContent from "./components/TopPageContent.vue";
import WorkTile from "./components/WorkTile.vue";
import type { Work } from "./types/Work.ts";
import AchievementTimeline from "./components/AchievementTimeline.vue";
import XIcon from "./components/Icons/XIcon.vue";
import GithubIcon from "./components/Icons/GithubIcon.vue";
import AtcoderIcon from "./components/Icons/AtcoderIcon.vue";

const works: Work[] = [
  {
    title: "traP Online Judge",
    role: "Infra Team Leader & Frontend Team",
    description:
      "traP内で開発中のオンラインジャッジサービス\n2025年春 v0リリース予定",
    technologies: ["vuejs", "tailwindcss", "amazonwebservice", "kubernetes"],
    developing: true,
  },
  {
    title: "Antonym",
    role: "Programmer Team",
    description:
      "「プレイする映画」を提供するミステリーアドベンチャー\n2025年夏 テストプレイ版リリース予定",
    technologies: ["unity", "csharp"],
    developing: true,
  },
  {
    title: "myPOMO",
    role: "App Frontend Team",
    description:
      "スケジュールを自動で構築する、新時代タスク管理アプリ\n2025年春 正式リリース予定",
    technologies: ["flutter", "dart"],
    developing: true,
  },
  {
    title: "traPortfolio",
    role: "Backend Team",
    description: "traP部員のためのポートフォリオサービス\n2024年7月 リリース",
    image: "/traPortfolio_thumbnail.svg",
    padding: true,
    technologies: ["go", "mysql"],
  },
  {
    title: "Homepage",
    role: "Developer",
    description: "本Webページ\n2025年1月 リリース",
    image: "/zoi_icon.png",
    dark: true,
    technologies: ["vuejs", "tailwindcss"],
  },
];

const activities: string[] = [
  "traP 代表補佐",
  // "GAME^3 Webフロント担当"
  "traP 2025新歓 特設ページ担当",
  "traP 2025新歓 ガイダンス動画担当",
  "traP 2025新歓 ハッキング体験会担当",
  "traP 2025新歓 講習会管轄",
  "traP GitHub Admin",
  "CPCTF 運営",
];

const certifications: string[] = [
  "AtCoder 2級 (Algo青 / Heu緑)",
  "2級ウェブデザイン技能士",
];
</script>

<template>
  <div
    class="min-h-screen w-full max-w-full bg-background font-primary text-text-primary"
  >
    <div class="flex h-screen w-full items-center justify-center">
      <div
        class="flex h-[40rem] w-80 flex-col items-center justify-center gap-20 border-x-2 border-text-secondary xl:w-[64rem]"
      >
        <div
          class="flex size-52 items-center justify-center overflow-visible xl:size-80"
        >
          <img
            src="/zoi_icon.png"
            class="size-52 max-w-none rounded-[20%] transition-all duration-200 ease-in-out xl:size-80 xl:hover:size-96"
            alt="logo"
          />
        </div>
        <span class="text-4xl font-extrabold xl:text-6xl">ZOI_dayo</span>
        <div class="inline-flex flex-col gap-4 xl:flex-row xl:gap-24">
          <a
            class="flex items-center justify-center gap-4 transition duration-200 ease-in-out xl:hover:-translate-y-1"
            href="https://x.com/ZOI_dayo"
          >
            <XIcon class="inline size-8" />
            <span class="font-mono text-2xl">@ZOI_dayo</span>
          </a>
          <a
            class="flex items-center justify-center gap-4 transition duration-200 ease-in-out xl:hover:-translate-y-1"
            href="https://atcoder.jp/users/ZOIZOI"
          >
            <AtcoderIcon class="inline size-8" />
            <span class="font-mono text-2xl">ZOIZOI</span>
          </a>
          <a
            class="flex items-center justify-center gap-4 transition duration-200 ease-in-out xl:hover:-translate-y-1"
            href="https://github.com/ZOI-dayo"
          >
            <GithubIcon class="inline size-8" />
            <span class="font-mono text-2xl">@ZOI-dayo</span>
          </a>
        </div>
      </div>
    </div>
    <div class="flex w-full flex-col items-center py-8">
      <div class="max-w-full px-8 xl:w-[72rem] xl:p-0">
        <TopPageContent title="About" subtitle="自己紹介">
          <p>
            東京科学大学 学部1年 (24B) / traP<br /><br />
            中高でWebフロントエンドと競技プログラミング(AtCoder)に触れ、大学に入ってからWebバックエンドにも挑戦しています。<br /><br />
            競技プログラミングで大量に書いたので最も慣れている言語はC++ですが、HTML/CSS、JavaScript、Dart(Flutter)などいろいろな言語を使っています。最近はGoやC#、SQLにも興味があります。
          </p>
        </TopPageContent>
        <TopPageContent title="Works" subtitle="作品">
          <div
            class="grid w-full grid-cols-1 justify-items-center gap-8 xl:grid-cols-2"
          >
            <WorkTile v-for="work in works" :key="work.title" :work="work" />
          </div>
          <!--          <div class="mt-8 place-items-center">-->
          <!--            <PrimaryButton>View all</PrimaryButton>-->
          <!--          </div>-->
        </TopPageContent>
        <TopPageContent title="Achievements" subtitle="実績">
          <AchievementTimeline />
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
    <div
      class="w-full items-center border-t border-primary/50 px-8 py-4 text-right text-text-primary/50"
    >
      &copy; 2025 ZOI_dayo
    </div>
  </div>
</template>
