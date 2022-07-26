import VueRouter from "vue-router"
// 引入组件
import OPStart from "../views/OPStart"
import OPLogin from "../views/OPLogin"
import OPHome from "../views/OPHome"
import HomeWelcome from "../views/HomeWelcome"
import UserList from "../views/Users/UserList"
// 注意children的值是一个数组！！！
const router = new VueRouter({
  //mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/start'
    },
    {
      path: '/start',
      component: OPStart,
      children: [
        {
          path: 'login',
          component: OPLogin,
        }
      ]
    },
    {
      path: '/home',
      redirect: '/home/welcome',
      component: OPHome,
      children: [
        {
          path: 'welcome',
          component: HomeWelcome,
        },
        {
          path: 'users',
          component: UserList
        }
      ]
    }
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next是一个函数 表示放行
  // next() 放行 next ('/login') 强制跳转 
  if (to.path === '/start') return next()
  if (to.path === '/start/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/start/login')
  next()
})
// 默认暴露路由
export default router