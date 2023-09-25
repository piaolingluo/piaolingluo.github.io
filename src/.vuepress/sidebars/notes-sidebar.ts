import { arraySidebar } from "vuepress-theme-hope";

export const notesSidebarConfig = arraySidebar([
    "", /* /notes/ */
    {
      text: "Java基础",
      icon: "fa-brands fa-java",
      prefix: "java/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "并发编程",
      icon: "fa-brands fa-threads",
      prefix: "concurrent/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "MySQL",
      icon: "fa-solid fa-database",
      prefix: "mysql/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Redis",
      icon: "fa-solid fa-server",
      prefix: "redis/",
      collapsible: true,
      children: "structure",
    },
]);