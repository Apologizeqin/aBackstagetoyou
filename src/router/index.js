import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//不需要任何权限就可以访问的
export const constantRoutes =[
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  routes: constantRoutes
})

const router = createRouter()
// export function resetRouter() {
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher // reset router
// }

export default router
