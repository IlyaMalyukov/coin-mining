import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import { MainPage } from '@/pages/main-page';
import { ROUTES } from '@/shared/constants';

const routes: RouteRecordRaw[] = [
    {
        path: ROUTES.MAIN_PAGE.PATH,
        name: ROUTES.MAIN_PAGE.NAME,
        component: MainPage,
    },
    // {
    //     path: ROUTES.SKINS.PATH,
    //     name: ROUTES.SKINS.NAME,
    //     component: SkinsPage,
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;