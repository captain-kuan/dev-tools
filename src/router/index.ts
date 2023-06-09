import { createRouter, createWebHashHistory } from "vue-router"
import routes from "./routes"
import guard from "./guard"
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach(guard)
export default router
