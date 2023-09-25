import { sidebar } from "vuepress-theme-hope";
import { notesSidebarConfig } from "./sidebars/notes-sidebar.js";

export default sidebar({
  "/notes/": notesSidebarConfig,
  // "/": [
  //   "",
  //   {
  //     text: "案例",
  //     icon: "laptop-code",
  //     prefix: "demo/",
  //     link: "demo/",
  //     children: "structure",
  //   },
  //   {
  //     text: "文档",
  //     icon: "book",
  //     prefix: "guide/",
  //     children: "structure",
  //   },
  //   "slides",
  // ],
});
