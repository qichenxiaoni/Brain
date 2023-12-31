import { hopeTheme } from "vuepress-theme-hope";
import { navBar } from "./navbar/index.js";
import { sideBar } from "./sidebar/index.js";

export default hopeTheme(
  {
    docsDir: "/src",
    repo: "qichenxiaoni/Brain",
    logo: "/avatar.png",
    hostname: "/",

    iconAssets: ["//at.alicdn.com/t/c/font_4184658_gug38i2p3r7.css"],

    locales: {
      "/": {
        navbar: navBar,
        sidebar: sideBar,
        footer: "GPL Licensed | © qichenxiaoni",
        displayFooter: false,
        blog: {
          description: "愿你我得偿所愿！",
          intro: "/",
          timeline: "今天努力了吗？",
        },
        metaLocales: {
          editLink: "编辑此页",
        },
      },
    },

    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Outlook","Repo","Search"],
    },

    plugins: {
      blog: true,

      feed: {
        rss: true,
      },

      mdEnhance: {
        tabs: true,
        codetabs: true,
        chart: true,
        echarts: true,
        mermaid: true,
        katex: true,
        vuePlayground: true,
        sub: true,
        sup: true,
        demo: true,
        tasklist: true,
        // card: true,
        figure: true,
        imgLazyload: true,
        imgMark: true,
        imgSize: true,
        include: true,
        attrs: true,
        mark: true,
        markmap: true,
        footnote: true,
        container: true,
        align: true,
      },

      components: {
        components: [
          "AudioPlayer",
          "Badge",
          "BiliBili",
          "CodePen",
          "PDF",
          "Replit",
          "StackBlitz",
          "VideoPlayer",
          "YouTube",          
        ],
      },

      pwa: {
        favicon: "/favicon.ico",
        cacheHTML: true,
        cachePic: true,
        appendBase: true,
        update: "hint",
        apple: {
          icon: "/assets/icon/apple-icon-152.png",
          statusBarColor: "black",
        },
        msTile: {
          image: "/assest/icon/ms-icon-144.png",
          color: "#ffffff",
        },
        manifest: {
          icons: [
            {
              src: "/assets/icon/chrome-mask-512.png",
              sizes: "512x512",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-mask-192.png",
              sizes: "192x192",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-192.png",
              sizes: "192x192",
              type: "image/png",
            },
          ],
          shortcuts: [
            {
              name: "Demo",
              short_name: "Demo",
              url: "/demo/",
              icons: [
                {
                  src: "/assets/icon/guide-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
            },
          ],
        },
      },
    },
  },
  { custom: true }
);
