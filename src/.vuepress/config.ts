import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "BroNotes(学长笔记)",
  description: "学长笔记，涵盖了后端所需基础知识",

  theme,

  plugins: [
    // 搜索框
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        }
      },
      // 指定搜索结果的最大条数
      maxSuggestions: 10,
      // 排除首页
      isSearchable: (page) => page.path !== "/",
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
