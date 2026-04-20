import HomeView from '@/views/HomeView.vue'
//import productView from '@/views/productView.vue'
import { createWebHistory,createRouter } from 'vue-router'

const routes =[
    {
        path:'/',
        name:'Home',
        component:HomeView
    },
    {
        path:'/about',
        name:'About',
        component:()=> import('@/views/AboutView.vue')

    },
    {
        path:'/product/:id',
        name:'Product',
        component: () => import('@/views/ProductView.vue')
    },
    {
        path:'/cart',
        name:'Cart',
        component:()=> import('@/views/CartView.vue')

    },
]

const router =createRouter({
    history:createWebHistory(),
    routes
})

export default router