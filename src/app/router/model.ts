import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import { MainPage } from '@/pages/main-page';
import { SkinsPage } from '@/pages/skins-page';
import { ROUTES } from '@/shared/constants';
import { LeaderboardPage } from '@/pages/leaderboard';

const routes: RouteRecordRaw[] = [
    {
        path: ROUTES.MAIN_PAGE.PATH,
        name: ROUTES.MAIN_PAGE.NAME,
        component: MainPage,
    },
    {
        path: ROUTES.SKINS_PAGE.PATH,
        name: ROUTES.SKINS_PAGE.NAME,
        component: SkinsPage,
    },
    {
        path: ROUTES.LEADERBOARD_PAGE.PATH,
        name: ROUTES.LEADERBOARD_PAGE.NAME,
        component: LeaderboardPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;