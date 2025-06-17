import { createRouter,createWebHistory } from "vue-router";

const routes = [
  {
    path:"/",   
    name:"home",
      component: () => import("../view/home.vue")
  },
  {
    path:"/download",
    name:"download",
    component: () => import("../view/download.vue")
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router