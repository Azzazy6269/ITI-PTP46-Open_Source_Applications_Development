<script setup>
import { computed , onMounted , onUnmounted } from 'vue';
import { useRouter } from 'vue-router';


onMounted (()=>{
  console.log("ProductCard component mounted")
})
onUnmounted(()=>{
  console.log("ProductCard component unmounted")
})
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


const router = useRouter()
const goToDetails=()=>{
  router.push(`/product/${props.product.id}`)
}

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
      <div class="card-actions justify-end">
        <button @click="goToDetails"  class="btn btn-primary w-full">View product</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>