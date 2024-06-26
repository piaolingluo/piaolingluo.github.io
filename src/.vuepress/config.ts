import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "BroNotes(学长笔记)",
  description: "学长笔记，一个记录和分享 Java 学习心得的小站",

  head: [
    ["meta", {"http-equiv": "Cache-Control", content: "no-cache, no-store, must-revalidate"}],
    ["meta", {"http-equiv": "Pragma", content: "no-cache"}],
    ["meta", {"http-equiv": "Expires", content: "0"}],
    // 百度统计
    ["script", {}, 'var _hmt = _hmt || [];(function(){ var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?d5d67b542db88aa4a01170e8496ed19c";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();'],
    // 关键词
    ["meta", {name: "keywords", content: "Java, 设计模式, 并发编程, MySQL, Redis"}],
  ],

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
