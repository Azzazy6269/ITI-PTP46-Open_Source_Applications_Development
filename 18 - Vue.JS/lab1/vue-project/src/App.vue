<script setup>
import {reactive, createApp, ref ,watch } from 'vue'
import ProductCard from './components/ProductCard.vue'
import mainProductCard from './components/mainProductCard.vue'
import navbar from './components/navbar.vue'
import Footer from './components/footer.vue'

const mainProduct = ref({
  "id": 1,
  "name": "Cozy Sneakers",
  "description": "High-quality sneakers that go with everything you wear.",
  "image": "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  "badge": "NEW",
  "discount": 20,
  "price": 120,
  "tags": ["Fashion", "Casual", "Sport"],
  "isAvailable":true
});

const products = ref([
  {
    "id": 2,
    "name": "Running Shoes",
    "price": 90,
    "discount": 10,
    "image": "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    "isAvailable":true
  },
  {
    "id": 3,
    "name": "Casual Boots",
    "price": 150,
    "discount": 0,
    "image": "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    "isAvailable":true
  },
  {
    "id": 4,
    "name": "Flip Flops",
    "price": 30,
    "discount": 50,
    "image": "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    "isAvailable":true
  }
]
);
</script>

<template>
  <navbar/>
  <div class="p-4">
    <mainProductCard :mainProduct="mainProduct"/>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <ProductCard v-for="(product, index) in products" :product="product" :key="index"/>
    </div>
    <Footer/>
  </div>
</template>

<style scoped></style>
