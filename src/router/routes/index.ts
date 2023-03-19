import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("@/views/HomePage.vue"),
    children: [
      {
        path: "/base64",
        component: () => import("@/views/Base64Page.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/LoginPage.vue"),
    meta: {
      isPublic: true,
    },
  },
];
export default routes;
