import { createRouter,createWebHistory } from "vue-router";

const routes = [
  {
    path:"/",   
    name:"home",
      component: () => import("../views/home.vue")
  },
  {
    path:"/download",
    name:"download",
    component: () => import("../views/download.vue")
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router