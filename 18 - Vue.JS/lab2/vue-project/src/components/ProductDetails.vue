<script setup>
import {computed} from 'vue';
import { onMounted , onUnmounted } from 'vue';


onMounted (()=>{
  console.log("ProductDetails component mounted")
})
onUnmounted(()=>{
  console.log("ProductDetails component unmounted")
})

const props = defineProps({
    product:{
        type:Object,
        required : true
    },
});

const final = computed(()=>{
    let discount = props.product.discount/100 *props.product.price
    return props.product.price - props.product.discount/100 *props.product.price
})

const emit = defineEmits(['buy']);

const handleBuy =()=>{
  emit('buy',props.product.id)
}



</script>

<template>
  <div v-if="product" class="card lg:card-side bg-base-100 shadow-xl mb-4">
    <figure class="lg:w-1/2">
      <img :src="product.image" alt="product image" class="w-full h-full object-cover" />
    </figure>
    <div class="card-body">
      <h5 class="card-title text-2xl">{{ product.name }}</h5>
      <p>{{ product.description }}</p>
      <div v-if="product && product.badge.length>0">
        <div class="badge badge-accent">{{product.badge }}</div>
      </div>
      <div v-if="product && product.discount>0">
        <p class="line-through text-gray-400">price: {{ product.price }}</p>
        <p class="text-error">discount: {{ product.discount }}%</p>
        <p class="text-success font-bold text-lg">final price: {{ final }}</p>
      </div>
      <div v-else>
        <p class="font-bold">price: {{ product.price }}</p>
      </div>

      <div v-if="product && product.tags.length>0" class="flex flex-wrap gap-1">
        <span v-for="(tag, index) in product.tags" :key="index" class="badge badge-secondary">{{ tag }}</span>
      </div>

      <p class="text-xs text-base-content/50">Last updated 3 mins ago</p>

      <div class="card-actions justify-end">
        <div v-if="product &&product.stock>0">
        <button @click="handleBuy" class="btn btn-primary">Buy</button>
        </div>
        <div v-else>
          <button @click="handleBuy" class="btn btn-disabled">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>