import theme from "./theme.js";
import { defineUserConfig } from "vuepress";
// @ts-ignore
import { searchProPlugin } from "vuepress-plugin-search-pro";
 
export default defineUserConfig({
  base: "/",

  head: [["script", {type: "text/javascript", src: "/assest/js/51la.js"}]],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "小陈的空间",
      description: "愿你我得偿所愿！",
    },
  },

  theme,

  plugins: [
    searchProPlugin({
      indexContent: true,
   }),
  ],

  // Enable it with pwa
  shouldPrefetch: false,
});
