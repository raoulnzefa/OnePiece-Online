import VueRouter from "vue-router"
// 引入组件
import OPStart from "../views/OPStart"
import OPLogin from "../views/OPLogin"
import OPHome from "../views/OPHome"

export default new VueRouter({
  //mode:'history',
  routes:[   
    {
      path:'/',
      redirect:'/start'
    },
    {
      path:'/start',
      component:OPStart,
      children:[
        {
          path:'login',
          component:OPLogin,
        }
      ]
    },
    {
      path:'/home',
      component:OPHome,
    }
  ]
})