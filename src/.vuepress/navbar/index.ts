import { navbar } from "vuepress-theme-hope";

export const navBar = navbar([
    {
        text: "首页",
        icon: "home",
        link: "/"
    },
    {
        text: "前端开发",
        icon: "frontend",
        link: "/web/frontend/guide/history",
    },
    {
        text: "后端开发",
        icon: "backend",
        link: "/web/backend/guide/history",
    },
    {
        text: "更新历史",
        icon: "time",
        link: "/timeline",
    },
]);
