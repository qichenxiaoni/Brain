import { fe } from "./group/fe";
import { be } from "./group/be";

import { sidebar } from "vuepress-theme-hope";

export const sideBar = sidebar({
    "/web/frontend/": fe,
    "/web/backend/": be,
});