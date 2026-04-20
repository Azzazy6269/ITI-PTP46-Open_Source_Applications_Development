<script setup>
import CarouselBanner from '@/components/CarouselBanner.vue'
import ProductCard from '@/components/ProductCard.vue'
import {inject} from 'vue'
import { onMounted , onUnmounted } from 'vue';
import {useProductsStore} from '@/store/products'
import { storeToRefs } from "pinia";

const ProductStore = useProductsStore();
const { products } = storeToRefs(ProductStore);

onMounted(async() => {
  console.log(`HomeView mounted`)
  await ProductStore.fetchAllProducts()
})
onUnmounted(() => {
  console.log('HomeView unmounted')
})
const props = defineProps({
  products:{
    type:Array,
    required:true
  }
})
</script>

<template>
    <CarouselBanner></CarouselBanner>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      <ProductCard v-for="(product, index) in products" :product="product" :key="index"/>
    </div>
</template>