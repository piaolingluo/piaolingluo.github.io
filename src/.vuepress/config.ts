import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "BroNotes(学长笔记)",
  description: "学长笔记，涵盖了后端所需基础知识",

  head: [
    ["meta", {name: "referrer", content: "no-referrer"}],
    ["meta", {"http-equiv": "Cache-Control", content: "no-cache, no-store, must-revalidate"}],
    ["meta", {"http-equiv": "Pragma", content: "no-cache"}],
    ["meta", {"http-equiv": "Expires", content: "0"}],
    // 百度统计
    ["script", {}, 'var _hmt = _hmt || [];(function(){ var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?c462f4fcf46a94f813b4514af33bf863";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();'],
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