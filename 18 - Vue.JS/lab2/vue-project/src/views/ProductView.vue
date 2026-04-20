<script setup>
import ProductCard from '@/components/ProductCard.vue';
import ProductDetails from '@/components/ProductDetails.vue';
import { useRoute } from 'vue-router'
import { computed } from 'vue';
import { onMounted , onUnmounted } from 'vue';


onMounted (()=>{
  console.log("ProductView component mounted")
})
onUnmounted(()=>{
  console.log("ProductView component unmounted")
})

const props = defineProps({
    products:{
        type:Array,
        required:true
    }
})

const emit = defineEmits(['buy'])

const route = useRoute();
//const productId = Number(route.params.id)

const productId = computed(() => Number(route.params.id));
const matchedProduct = computed(() =>
  props.products.find(p => p.id === productId.value)
)

const relatedProducts = computed(() =>
  props.products.filter(p => p.id !== productId.value)
)

const handleBuy = (productId) => {
  emit('buy', productId)
}
</script>

<template>
<div v-if="matchedProduct" class="p-8">
    <ProductDetails :product="matchedProduct" @buy="handleBuy" ></ProductDetails>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
    <ProductCard v-for="product in relatedProducts" :product="product" :key="product.id"/>
</div>
</template>