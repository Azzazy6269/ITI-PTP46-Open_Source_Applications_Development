<script setup>
import ProductCard from '@/components/ProductCard.vue';
import ProductDetails from '@/components/ProductDetails.vue';
import { useRoute } from 'vue-router'
import { computed } from 'vue';
import { onMounted , onUnmounted ,watch } from 'vue';
import {useProductsStore} from '@/store/products'
import { storeToRefs } from "pinia";

const ProductStore = useProductsStore();
const { products , matchedProduct , relatedProducts } = storeToRefs(ProductStore);
const route = useRoute();
const productId = computed(() => Number(route.params.id));

onMounted(async() => {
  console.log(`ProductView mounted`)
  await ProductStore.getProductById(productId.value)
})
onUnmounted(()=>{
  console.log("ProductView component unmounted")
})

watch(productId, async (newId) => {
    console.log(`watch productId : ${productId}`)
    console.log(`watch newId : ${newId}`)

  await ProductStore.getProductById(newId);
})


const emit = defineEmits(['buy'])

const handleBuy =async () => {
  await ProductStore.decreaseQuantityByOne();
}
</script>

<template>
<div v-if="matchedProduct" class="p-8">
    <ProductDetails :product="matchedProduct" @buy="handleBuy" ></ProductDetails>
</div>
<div v-if="relatedProducts && relatedProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
    <ProductCard v-for="product in relatedProducts" :product="product" :key="product.id"/>
</div>
</template>