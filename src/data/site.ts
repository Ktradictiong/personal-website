export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type StatItem = {
  value: string;
  label: string;
  note: string;
};

export type ResumeTab = {
  id: "profile" | "gear" | "skill";
  label: string;
  english: string;
  items: string[];
  footnote: string;
};

export type PhotoPreset = {
  id: "snow" | "film" | "night";
  label: string;
  caption: string;
  background: string;
};

export type PortfolioItem = {
  id: number;
  title: string;
  category: "人文纪实" | "环境人像" | "自然风光" | "黑白艺术";
  place: string;
  date: string;
  camera: string;
  likes: string;
  views: string;
  exif: {
    aperture: string;
    shutter: string;
    iso: string;
    lens: string;
    tone: string;
    note: string;
  };
  visual: string;
  tilt: string;
};

export type Stage = {
  label: string;
  title: string;
  text: string;
  hint: string;
};

export type Review = {
  id: number;
  date: string;
  title: string;
  summary: string;
  tags: string[];
  thumb: string;
  quote: string;
  planning: string[];
  gear: Array<[string, string]>;
  difficulty: string;
  stages: Stage[];
  reflection: string[];
};

export type AigcOptionGroup = {
  id: "subject" | "lens" | "style";
  label: string;
  english: string;
  options: string[];
};

export type AigcGalleryItem = {
  title: string;
  date: string;
  engine: string;
  description: string;
  tags: string[];
  visual: string;
};

export const navItems: NavItem[] = [
  { label: "个人简介", href: "#profile" },
  { label: "作品集", href: "#portfolio" },
  { label: "复盘", href: "#reviews" },
  { label: "AIGC", href: "#aigc" }
];

export const heroStats: StatItem[] = [
  { value: "120+", label: "影像项目", note: "Projects" },
  { value: "24+", label: "城市采风", note: "Travel Places" },
  { value: "4,500+", label: "素材归档", note: "Raw Archive" },
  { value: "3", label: "创作方向", note: "Columns" }
];

export const photoPresets: PhotoPreset[] = [
  {
    id: "snow",
    label: "雪路",
    caption: "SAMPLE FRAME #008",
    background:
      "linear-gradient(180deg, rgba(238,243,246,0.95), rgba(248,249,245,0.75) 35%, rgba(26,32,38,0.98) 36%, rgba(12,20,30,0.98) 67%, rgba(237,242,243,0.96) 68%), linear-gradient(115deg, transparent 0 35%, rgba(250,250,250,0.82) 36% 43%, transparent 44%), linear-gradient(88deg, transparent 0 50%, rgba(255,215,76,0.8) 50.5% 52%, transparent 53%)"
  },
  {
    id: "film",
    label: "人文胶片",
    caption: "PORTRAIT CONTACT #021",
    background:
      "radial-gradient(circle at 28% 35%, rgba(255,214,122,0.9), transparent 20%), linear-gradient(130deg, rgba(84,41,18,0.95), rgba(178,84,38,0.88) 42%, rgba(35,53,67,0.96) 43%, rgba(11,16,20,0.98)), linear-gradient(90deg, rgba(255,255,255,0.16), transparent)"
  },
  {
    id: "night",
    label: "城市夜色",
    caption: "NEON CITY #047",
    background:
      "radial-gradient(circle at 18% 18%, rgba(255,46,94,0.95), transparent 16%), radial-gradient(circle at 80% 26%, rgba(53,208,255,0.84), transparent 18%), linear-gradient(135deg, rgba(14,12,34,0.98), rgba(16,43,78,0.94) 45%, rgba(3,6,13,0.98)), linear-gradient(90deg, transparent 0 48%, rgba(255,255,255,0.52) 49% 51%, transparent 52%)"
  }
];

export const resumeTabs: ResumeTab[] = [
  {
    id: "profile",
    label: "生活履历",
    english: "Profile",
    items: [
      "全功能独立视觉服务",
      "自研复盘卡片：图文还原现场、教训反思",
      "AIGC 概念融合：Midjourney 摄影流",
      "全年 120+ 组图：胶片粗盐暗房洗印"
    ],
    footnote: "Locan 系影像工作室档案：细节有线，情绪无界。我们致力于捕捉每一帧夜雨的定格。"
  },
  {
    id: "gear",
    label: "核心装备",
    english: "Gear",
    items: [
      "Leica M6：街头纪实与低照度胶片",
      "Sony A7C II：轻量旅行与城市夜色",
      "Hasselblad 907X：中画幅静物和质感",
      "Polaroid Now+：即时成像与手写档案"
    ],
    footnote: "设备不是目的，它们只是让我更快靠近现场温度的笔。"
  },
  {
    id: "skill",
    label: "视觉技能",
    english: "Skill",
    items: [
      "人文纪实叙事：在街道里寻找人物关系",
      "自然边界观察：雪原、海岸、森林与风",
      "胶片色彩管理：颗粒、暗角、留白与偏色",
      "Prompt 实验：把拍摄经验转译为 AI 视觉语言"
    ],
    footnote: "技能树的目标很简单：让真实画面拥有一点想象，让想象保留一点真实。"
  }
];

export const portfolioFilters = ["全部作品", "人文纪实", "环境人像", "自然风光", "黑白艺术"] as const;

const portfolioItemsBase: Array<Omit<PortfolioItem, "exif">> = [
  {
    id: 1,
    title: "北京胡同里的烟火童话",
    category: "人文纪实",
    place: "北京",
    date: "2025.10",
    camera: "Leica",
    likes: "889",
    views: "14.2k",
    tilt: "-rotate-1",
    visual:
      "radial-gradient(circle at 22% 18%, rgba(255,245,200,0.96), transparent 10%), radial-gradient(circle at 68% 42%, rgba(250,44,33,0.9), transparent 18%), linear-gradient(110deg, #32100d, #d2261f 31%, #161518 32%, #0b1320 68%, #f4a000)"
  },
  {
    id: 2,
    title: "塞纳河左岸的镜头旁白",
    category: "环境人像",
    place: "重庆",
    date: "2026.01",
    camera: "Sony",
    likes: "672",
    views: "10.8k",
    tilt: "rotate-1",
    visual:
      "radial-gradient(circle at 48% 38%, rgba(238,209,186,0.95), transparent 17%), linear-gradient(90deg, #90a0ff, #bdd0ff 32%, #7a79dd 33%, #5f6dd5 70%, #d6c0d5)"
  },
  {
    id: 3,
    title: "阿尔卑斯的孤独守望者",
    category: "自然风光",
    place: "新疆",
    date: "2025.12",
    camera: "Sony",
    likes: "1.2k",
    views: "21.5k",
    tilt: "-rotate-[0.6deg]",
    visual:
      "linear-gradient(145deg, #13231e 0 28%, #d8b178 29% 46%, #f0d7a0 47% 58%, #fff2d0 59% 63%, #009b86 64% 100%)"
  },
  {
    id: 4,
    title: "老人、树、旧时钟",
    category: "黑白艺术",
    place: "上海",
    date: "2025.07",
    camera: "Hasselblad",
    likes: "746",
    views: "9.4k",
    tilt: "rotate-[0.8deg]",
    visual:
      "radial-gradient(circle at 45% 52%, rgba(86,121,42,0.95), transparent 22%), linear-gradient(180deg, #b9ddf4 0 45%, #e7dfc4 46% 100%), linear-gradient(90deg, transparent 0 48%, #6f4629 49% 52%, transparent 53%)"
  },
  {
    id: 5,
    title: "街头上的蓝色沉默",
    category: "环境人像",
    place: "天津",
    date: "2025.11",
    camera: "Sony",
    likes: "925",
    views: "12.9k",
    tilt: "-rotate-1",
    visual:
      "radial-gradient(circle at 42% 32%, rgba(255,208,176,0.9), transparent 13%), linear-gradient(90deg, #0f7f92, #168ea1 42%, #096778 43% 100%)"
  },
  {
    id: 6,
    title: "晨光描摹角落的纸艺术",
    category: "黑白艺术",
    place: "福建",
    date: "2025.08",
    camera: "Leica",
    likes: "588",
    views: "8.1k",
    tilt: "rotate-1",
    visual:
      "linear-gradient(135deg, #1e2328 0 8%, #c9c9c0 8% 12%, #ffd119 13% 100%), linear-gradient(45deg, transparent 0 40%, rgba(255,255,255,0.55) 41% 48%, transparent 49%)"
  }
];

export const portfolioItems: PortfolioItem[] = portfolioItemsBase.map((item) => ({
  ...item,
  exif: {
    aperture: item.id % 2 === 0 ? "f/2.0" : "f/1.8",
    shutter: item.id % 3 === 0 ? "1/500s" : "1/250s",
    iso: item.id % 2 === 0 ? "400" : "100",
    lens: item.category === "自然风光" ? "35mm Summicron" : "85mm Planar",
    tone: item.category === "黑白艺术" ? "低饱和黑白颗粒" : "暖调胶片与轻微青影",
    note: "保持手持的微抖动，优先保留现场光的方向和人的停顿。"
  }
}));

export const reviews: Review[] = [
  {
    id: 1,
    date: "2026.03.12",
    title: "重庆‘魔幻森林’人像拍摄深度复盘",
    summary: "如何在极高反差的树荫与逆光下保证肤色通透与胶片氛围？",
    tags: ["逆光控制", "森林氛围", "胶片色调"],
    thumb:
      "radial-gradient(circle at 48% 28%, #f1c1ad, transparent 18%), linear-gradient(155deg, #1c2b1c, #9e2f3b 52%, #221719)",
    quote:
      "在重庆南山的一片叶叶林里，我们试图打造一种‘森林幻境’的古朴人像风格。当天光线晴朗，树影斑驳，形成了典型的高反差明暗死角。",
    planning: [
      "时间选择：精准定位在下午 4:20-5:10，此时太阳高度角约 15 度，金色侧逆光最佳。",
      "服装选色：避开大白大黑，使用亚麻绿、乳黄等天然大自然素材色，便于森林环境融合。",
      "器材准备：选用 85mm 压缩背景，遮除林外部分高光杂乱建筑。"
    ],
    gear: [
      ["LENS", "Carl Zeiss 85mm Planar f/1.4"],
      ["APERTURE", "f/1.8"],
      ["SHUTTER", "1/250s"],
      ["ISO", "100"]
    ],
    difficulty:
      "树影散落在脸上导致斑驳杂乱的“老虎斑”，逆光拍摄容易形成严重画面起雾与镜头眩光。",
    stages: [
      {
        label: "STAGE 01",
        title: "观察环境",
        text: "先进入树林，让模特避开主道直射光。寻找一片有金色反光斑驳的树根平台。",
        hint: "示意：背后斜逆光 + 避免面部反射"
      },
      {
        label: "STAGE 02",
        title: "确定人物与背景关系",
        text: "让人物与背景保持约 4.5 米，利用树间散射光反射，形成柔和轮廓。",
        hint: "示意：手肘反光板 + 眼神光"
      },
      {
        label: "STAGE 03",
        title: "完成画面节奏",
        text: "后期用降高光与保留颗粒的方式压住暖色，使肤色更自然。",
        hint: "示意：胶片质感 + 复古褪色"
      }
    ],
    reflection: [
      "永远不要把反光板举在下巴正下方往上照，这会产生明显的诡异底光。",
      "大光圈不等于完美虚化。在密林中，过大的虚化会让树叶变成闪动斑点。",
      "数码相机后期模拟胶片时，增加适度粗糙颗粒参数是点睛之笔。"
    ]
  },
  {
    id: 2,
    date: "2026.01.05",
    title: "《雪国边际》冷调纪实风景拍摄复盘",
    summary: "零下 30 度极端风雪场景与机身防冻方案处理。",
    tags: ["雪景曝光", "防雾策略", "极寒纪实"],
    thumb:
      "radial-gradient(circle at 62% 32%, rgba(228,231,238,0.92), transparent 22%), linear-gradient(145deg, #151a2c, #495e7a 52%, #100d14)",
    quote:
      "雪地不是白色的空白，而是一张会反光、会吞掉边界的纸。冷调创作的关键是不要让天空和雪线互相消失。",
    planning: [
      "曝光补偿保持 +0.7EV，避免相机把大面积雪面错误压暗。",
      "备用电池放在贴身口袋，轮换取用。",
      "构图上使用黑色道路、木桩或人物形成低频锚点。"
    ],
    gear: [
      ["LENS", "35mm f/2"],
      ["APERTURE", "f/5.6"],
      ["SHUTTER", "1/800s"],
      ["ISO", "200"]
    ],
    difficulty:
      "强风卷起雪雾，自动对焦频繁抓到前景雪粒；镜头进出车内时也会迅速起雾。",
    stages: [
      {
        label: "STAGE 01",
        title: "固定地平线",
        text: "先寻找道路与山脊的交界，让画面有可读方向。",
        hint: "示意：黑线压住雪面"
      },
      {
        label: "STAGE 02",
        title: "等待风停间隙",
        text: "风雪变稀的一秒钟内完成连拍，保证远处山体轮廓存在。",
        hint: "示意：连拍三张取中间"
      },
      {
        label: "STAGE 03",
        title: "压低蓝紫噪声",
        text: "后期保留冷调，但减少暗部蓝紫色块，避免画面脏。 ",
        hint: "示意：冷调但不脏"
      }
    ],
    reflection: [
      "极寒拍摄不要频繁更换镜头，减少机身内部进雪风险。",
      "雪景的层次来自阴影，不能只追求纯白。",
      "风雪越强，越需要一个明确的暗色主体。"
    ]
  }
];

export const aigcGroups: AigcOptionGroup[] = [
  {
    id: "subject",
    label: "主体",
    english: "Subject Idea",
    options: ["机械猫咪", "复古飞行员", "未来都市", "森林花园"]
  },
  {
    id: "lens",
    label: "镜头",
    english: "Camera Lens",
    options: ["35mm", "50mm", "85mm"]
  },
  {
    id: "style",
    label: "风格",
    english: "Draft Vibe",
    options: ["手绘草稿", "胶片颗粒", "电影光影"]
  }
];

export const aigcGallery: AigcGalleryItem[] = [
  {
    title: "甲虫般的森林宴会",
    date: "2026.04.09",
    engine: "Midjourney v6.1",
    description:
      "An elegant botanical banquet with beetle-like armor, copper dust, wild flowers and hand-scored paper texture.",
    tags: ["森林", "复古宴会"],
    visual:
      "radial-gradient(circle at 28% 42%, #f26d3d, transparent 13%), radial-gradient(circle at 58% 36%, #f7d86d, transparent 12%), linear-gradient(135deg, #0f1d13, #2a3219 45%, #8b241c)"
  },
  {
    title: "镜头背后的未来海岸",
    date: "2026.04.18",
    engine: "MJ + ControlNet",
    description:
      "A lonely vintage camera holding blue ocean reflections, merged with futuristic shoreline sketches and ink outlines.",
    tags: ["海岸", "机械梦"],
    visual:
      "radial-gradient(circle at 45% 45%, #0b1d28, #192836 13%, transparent 14%), linear-gradient(135deg, #9ed7ea, #2a7f9b 42%, #123441)"
  },
  {
    title: "斑驳夜光下的人像档案",
    date: "2026.05.02",
    engine: "Stable Diffusion + LoRA",
    description:
      "A cinematic portrait of Locan the nomadic photographer, warm woods, camera shadow and dynamic ink splashes.",
    tags: ["人像", "未来主义"],
    visual:
      "radial-gradient(circle at 49% 35%, #2b1f1a, transparent 14%), linear-gradient(120deg, #2e170d, #c6813b 35%, #111315 36% 68%, #f0a33a)"
  }
];
