import Vue from 'vue'
import Router from 'vue-router'
import SelectPayment from '@/views/PaymentSelect.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'select',
      component: SelectPayment
    },
    {
      path: '/credit-card',
      name: 'creditcard',
      component: () => import(/* webpackChunkName: "credit-card" */ './views/CreditCard.vue')
    },
    {
      path: '/web-atm',
      name: 'web-atm',
      component: () => import(/* webpackChunkName: "web-atm" */ './views/WebAtm.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import(/* webpackChunkName: "shop" */ './views/Shop.vue')
    },
    {
      path: '/finish',
      name: 'finish',
      component: () => import(/* webpackChunkName: "finish" */ './views/Finish.vue')
    }
  ]
})
