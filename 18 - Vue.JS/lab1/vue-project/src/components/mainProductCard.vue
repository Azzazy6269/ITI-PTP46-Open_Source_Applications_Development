<script setup>
import {computed} from 'vue';

const props = defineProps({
    mainProduct:{
        type:Object,
        required : true
    }
});

const final = computed(()=>{
    let discount = props.mainProduct.discount/100 *props.mainProduct.price
    return props.mainProduct.price - props.mainProduct.discount/100 *props.mainProduct.price
})

</script>

<template>
  <div class="card lg:card-side bg-base-100 shadow-xl mb-4">
    <figure class="lg:w-1/2">
      <img :src="mainProduct.image" alt="product image" class="w-full h-full object-cover" />
    </figure>
    <div class="card-body">
      <h5 class="card-title text-2xl">{{ mainProduct.name }}</h5>
      <p>{{ mainProduct.description }}</p>
      <div class="badge badge-accent">{{ mainProduct.badge }}</div>

      <div v-if="mainProduct && mainProduct.discount>0">
        <p class="line-through text-gray-400">price: {{ mainProduct.price }}</p>
        <p class="text-error">discount: {{ mainProduct.discount }}%</p>
        <p class="text-success font-bold text-lg">final price: {{ final }}</p>
      </div>
      <div v-else>
        <p class="font-bold">price: {{ mainProduct.price }}</p>
      </div>

      <div v-if="mainProduct && mainProduct.tags.length>0" class="flex flex-wrap gap-1">
        <span v-for="(tag, index) in mainProduct.tags" :key="index" class="badge badge-secondary">{{ tag }}</span>
      </div>

      <p class="text-xs text-base-content/50">Last updated 3 mins ago</p>

      <div class="card-actions justify-end">
        <a href="#" class="btn btn-primary">Add to cart</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>