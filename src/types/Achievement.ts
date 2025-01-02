export type Achievement = {
  // priority
  // 0  = ?
  // 1  = ?
  // 2  = やるだけ
  // 3  = 表彰 / 選抜あり
  // 4  = 24B内10位
  // 5  = 24B内上位
  // 6  = 24B内1位
  // 7  = 部内上位 / ±3学年内上位
  // 8  = 部内1位  / ±3学年内1位
  // 9  = 全国上位
  // 10 = 全国1位
  priority: number;
  date: string;
  title: string;
  links?: {
    trap?: string;
    github?: string;
    x?: string;
    atcoder?: string;
  };
};
