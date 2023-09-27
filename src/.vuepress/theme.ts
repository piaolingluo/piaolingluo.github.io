import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://piaolingluo.github.io",

  author: {
    name: "piaolingluo",
    url: "",
  },

  // Fontawesome: https://fontawesome.com/icons
  iconAssets: "fontawesome-with-brands",

  logo: "/logo.svg",

  repo: "piaolingluo/piaolingluo.github.io",

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar,

  // 是否全局启用路径导航
  breadcrumb: true,

  // 页脚 <a href='https://github.com/piaolingluo'>飘零落</a>
  footer: "",

  displayFooter: true,

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 全局禁用页面编辑
  editLink: false,
  
  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {  
    /**
     * You should generate and use your own comment service
     * 
     * 1. 你需要创建一个公开仓库，并开启评论区，以作为评论存放的地点
     * 2. 你需要安装 Giscus App(https://github.com/apps/giscus)，使其有权限访问对应仓库。
     * 3. 在完成以上步骤后，请前往 Giscus 页面(https://giscus.app/zh-CN) 获得你的设置。你只需要填写仓库和 Discussion 分类，
     * 之后滚动到页面下部的 “启用 giscus” 部分，复制 data-repo, data-repo-id, data-category 和 data-category-id 四项，
     * 并将其作为插件选项传入 repo, repoId, category categoryId。
     */
    comment: {
      // 全局禁用评论
      comment: false,
      provider: "Giscus",
      repo: "piaolingluo/piaolingluo.github.io",
      repoId: "R_kgDOKXjT0w",
      category: "Announcements",
      categoryId: "DIC_kwDOKXjT084CZmMC",
      reactionsEnabled: false,
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    components: {
      // 你想使用的组件
      components: [
        "ArtPlayer",
        "AudioPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "PDF",
        "Replit",
        "Share",
        "SiteInfo",
        "StackBlitz",
        "VideoPlayer",
        "XiGua",
        "YouTube",
      ],
    },

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
