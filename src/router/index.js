import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'//首页
import Product from '@/components/Product'//产品
import Modules from '@/components/Modules'//模块
import Example from '@/components/Example'//案例
import Joinus from '@/components/Joinus'//加入我们

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path: '/Modules',
      name: 'Modules',
      component: Modules
    },
    {
      path: '/Example',
      name: 'Example',
      component: Example
    },
    {
      path: '/Joinus',
      name: 'Joinus',
      component: Joinus
    }
  ]
})
