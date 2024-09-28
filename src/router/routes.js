const routes = [
  {
    path: "/login",
    component: () => import("pages/Auth/LoginPage.vue"),
  },
  {
    path: "/unauthorized",
    component: () => import("layouts/MainLayout.vue"),
  },
  {
    path: "/",
    component: () => import("layouts/AuthenticatedLayout.vue"),
    children: [
      {
        path: "account",
        component: () => import("pages/Profile/MyProfile.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
