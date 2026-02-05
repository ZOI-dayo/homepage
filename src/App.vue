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
      "traP内で開発中のオンラインジャッジサービス\n2025年内 v0リリース予定",
    technologies: ["vuejs", "tailwindcss", "amazonwebservice", "kubernetes"],
    developing: true,
  },
  {
    title: "酔い覚ましの回顧録",
    role: "Programmer Team & Graphics Team",
    description:
      "ミステリーアドベンチャーゲームです。 捜索範囲はなんと「プレイヤーが経験した会話ログ全て」。小説や映画の主人公になった気持ちで目の前の謎を解決していきましょう。ゲームダンジョン8、工大祭2025にプロローグ版を出展しました。",
    image: "/works/Antonym/thumbnail.png",
    dark: true,
    // padding: false,
    technologies: ["unity", "csharp"],
    developing: true,
  },
  {
    title: "myPOMO",
    role: "App Frontend Team",
    description:
      "スケジュールを自動で構築する、新時代タスク管理アプリ\n2025年8月 ベータ版リリース",
    image: "/works/myPOMO/myPOMO_logo.png",
    technologies: ["flutter", "dart"],
  },
  {
    title: "Pioneer Village",
    role: "Programmer Team",
    description:
      "ポストアポカリプスを舞台とした開拓シミュレーションゲームです。探索×開拓×防衛をテーマとして、チームを率いて広大な未踏地へ踏み込み、開拓村を発展させ、敵襲から守り抜きます。\n2025年11月 ゲームダンジョン10に出展しました。",
    image: "/works/PioneerVillage/thumbnail.png",
    dark: true,
    // padding: false,
    technologies: ["unity", "csharp"],
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
    title: "rucQ",
    role: "UI Frontend Team",
    description: "traPの合宿をより楽しく・より便利にするための総合Webアプリ",
    image: "/rucq.svg",
    padding: true,
    technologies: ["vuejs"],
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
  "traP 代表",
  // "GAME^3 Webフロント担当"
  // "traP 2025新歓 特設ページ担当",
  // "traP 2025新歓 ガイダンス動画担当",
  // "traP 2025新歓 ハッキング体験会担当",
  // "traP 2025新歓 講習会管轄",
  // "traP 2025新歓 オリエンテーション担当",
  // "traP 2025新歓 LINE Bot開発担当",
  "traP GitHub Admin",
  // "CPCTF2025 運営",
];

const certifications: string[] = [
  "AtCoder 2級 (Algo青 / Heu緑)",
  "2級ウェブデザイン技能士",
  "データベーススペシャリスト",
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
            東京科学大学 学部2年 (24B) / traP<br /><br />
            中高でWebフロントエンドと競技プログラミング(AtCoder)に触れ、大学に入ってからはバックエンドやUnity、お絵描き、作曲など幅広い分野に挑戦しています。
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
