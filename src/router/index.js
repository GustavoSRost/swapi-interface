import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },

  {
    path: "/people",
    name: "people",
    component: () => import(/* webpackChunkName: "people" */ "../views/People.vue"),
    children: [
      {
        path: "/people/:id",
        name: "person",
        component: () => import(/* webpackChunkName: "person" */ "../views/Person.vue"),
      },
    ],
  },

  {
    path: "/planets",
    name: "planets",
    component: () => import(/* webpackChunkName: "planets" */ "../views/Planets.vue"),
    children: [
      {
        path: "/planets/:id",
        name: "planet",
        component: () => import(/* webpackChunkName: "planet" */ "../views/Planet.vue"),
      },
    ],
  },

  {
    path: "/starships",
    name: "starships",
    component: () => import(/* webpackChunkName: "starships" */ "../views/Starships.vue"),
    children: [
      {
        path: "/starships/:id",
        name: "starship",
        component: () =>
          import(/* webpackChunkName: "starship" */ "../views/Starship.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
