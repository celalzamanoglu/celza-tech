export const dictionary = {
  header: {
    tagline: "无限可能，精心打造。",
    nav: {
      services: "服务",
      projects: "项目",
      team: "团队",
      contact: "联系",
    },
  },
  hero: {
    headlinePrefix: "创意、高质量、可靠的",
    words: ["应用", "网站", "自动化"],
    paragraph:
      "我们打造生产级别的 Web 应用、跨平台移动应用、可靠的后端服务，以及基于 AI 的自动化，助力您的团队更快更稳地前进。",
    ctaPrimary: "联系我们",
    ctaSecondary: "了解服务",
  },
  services: {
    title: "我们的能力",
    items: [
      {
        title: "Web 应用",
        description: "基于现代技术栈的高性能、可访问性强的 Web 应用。",
      },
      {
        title: "跨平台移动端",
        description: "一套代码同时支持 iOS、Android 与桌面端。",
      },
      {
        title: "后端服务",
        description: "安全可扩展的 API、数据库、可观测性与运维。",
      },
      {
        title: "AI 自动化",
        description: "基于智能体的流程，减少重复劳动并加速团队协作。",
      },
    ],
  },
  projects: {
    title: "精选案例",
    items: [
      {
        subtitle: "移动应用",
        description: "连接本地商家与社区的 iOS 与 Android 应用。",
      },
      {
        subtitle: "网站",
        description: "以品牌为核心，配合生动动画与转化率优化。",
      },
      {
        subtitle: "作品集",
        description: "展示精选产品、应用与实验的个人作品集。",
      },
      {
        subtitle: "Web 应用",
        description: "AI 驱动的健身助手，支持训练与计划。",
      },
    ],
  },
  team: {
    title: "团队",
    role: "创始人兼 CEO",
    location: "伊斯坦布尔，土耳其",
  },
  contact: {
    title: "联系",
    lead: "欢迎与我们交流您的项目，我们将在 24–48 小时内回复。",
  },
  footer: {
    rights: "© {year} Celza, Inc. 保留所有权利。",
    links: {
      about: "关于",
      projects: "项目",
    },
  },
} as const;
