<script setup>
import {reactive, createApp, ref ,watch, provide } from 'vue'

import navbar from './components/navbar.vue'
import Footer from './components/footer.vue'


const products = ref([
  {
    "id": 1,
    "name": "Cozy Sneakers",
    "description": "High-quality sneakers that go with everything you wear.",
    "image": "https://m.media-amazon.com/images/I/71UQ0gUvCFL._AC_UL480_FMwebp_QL65_.jpg",
    "badge": "NEW",
    "price": 120,
    "discount": 20,
    "stock": 10,
    "tags": ["Fashion", "Casual", "Sport"]
  },
  {
    "id": 2,
    "name": "Classic Shoes",
    "description": "Built for speed and comfort on any terrain.",
    "image": "https://m.media-amazon.com/images/I/613EpMRrrPL._AC_UL480_FMwebp_QL65_.jpg",
    "badge": "",
    "price": 90,
    "discount": 10,
    "stock": 5,
    "tags": ["Sport", "Running"]
  },
  {
    "id": 3,
    "name": "Casual Sneakers",
    "description": "Rugged boots for everyday adventures.",
    "image": "https://m.media-amazon.com/images/I/71iM1HfOsyL._AC_UL480_FMwebp_QL65_.jpg",
    "badge": "SALE",
    "price": 150,
    "discount": 0,
    "stock": 8,
    "tags": ["Casual", "Winter"]
  },
  {
    "id": 4,
    "name": "Women Shoes",
    "description": "Light and breezy for sunny days.",
    "image": "https://m.media-amazon.com/images/I/71nuHKqmeYL._AC_UL480_FMwebp_QL65_.jpg",
    "badge": "",
    "price": 30,
    "discount": 50,
    "stock": 20,
    "tags": ["Summer", "Casual"]
  },
  {
    "id": 5,
    "name": "Airforce",
    "description": "Light and breezy for sunny days.",
    "image": "https://m.media-amazon.com/images/I/61MubdIPbkL._AC_UL480_FMwebp_QL65_.jpg",
    "badge": "",
    "price": 40,
    "discount": 50,
    "stock": 20,
    "tags": ["Summer", "Casual"]
  },
  {
    "id": 6,
    "name": "Sports Shoes",
    "description": "Light and breezy for sunny days.",
    "image": "https://m.media-amazon.com/images/I/71Aw4gC1zOL._AC_UL480_FMwebp_QL65_.jpg",
    "badge": "",
    "price": 30,
    "discount": 12,
    "stock": 2,
    "tags": ["Summer", "Casual"]
  },
  {
    "id": 7,
    "name": "Women Classic Shoes",
    "description": "Light and breezy for sunny days.",
    "image": "https://m.media-amazon.com/images/I/61vJH8NJE5L._AC_UL480_FMwebp_QL65_.jpg",
    "badge": "",
    "price": 70,
    "discount": 0,
    "stock": 11,
    "tags": ["Classic"]
  }
])

const handleBuy = (productId) => {
  const product = products.value.find(p => p.id === productId)
  if (product && product.stock > 0) {
    product.stock--
  }
}
</script>

<template>
  <navbar/>
  <div class="p-4">
    <main>
      <RouterView v-slot="{ Component }">
        <component 
          :is="Component" 
          :products="products" 
          @buy="handleBuy" 
        />
      </RouterView>
    </main>
    <Footer/>
  </div>
</template>

<style scoped></style>
