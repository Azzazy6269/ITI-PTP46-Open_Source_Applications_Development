<script setup>
import { onMounted } from 'vue'
import navbar from './components/navbar.vue'
import Footer from './components/footer.vue'
import {useProductsStore} from '@/store/products'
const productStore = useProductsStore();
onMounted(async () => {
  await productStore.fetchAllProducts()
})
</script>

<template>
  <navbar/>
  <div class="p-4">
    <main>
      <RouterView />
    </main>
    <Footer/>
  </div>
</template>

<style scoped></style>
