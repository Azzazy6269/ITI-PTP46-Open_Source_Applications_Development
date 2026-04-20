<script setup>
import {computed} from 'vue';

const props = defineProps({
    product:{
        type:Object,
        required : true
    }
});

const final = computed(()=>{
    let discount = props.product.discount/100 *props.product.price
    return props.product.price - props.product.discount/100 *props.product.price
})

const available = computed(()=>{
  if(props.product.isAvailable) return "available";
  return "not avialble"
})

</script>

<template>
  <div class="card w-72 bg-base-100 shadow-xl">
    <figure>
      <img :src="product.image" alt="product image" />
    </figure>
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text"></p>

      <div v-if="product && product.discount>0">
        <p class="line-through text-gray-400">price: {{ product.price }}</p>
        <p class="text-error">discount: {{ product.discount }}%</p>
        <p class="text-success font-bold">final price: {{ final }}</p>
      </div>
      <div v-else>
        <p class="font-bold">price: {{ product.price }}</p>
      </div>
      <p class="font-bold">{{ available }}</p>
      <div class="card-actions justify-end">
        <a href="#" class="btn btn-primary w-full">Add to cart</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>