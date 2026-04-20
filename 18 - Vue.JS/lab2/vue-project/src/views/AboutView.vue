<script setup>
import { onMounted , onUnmounted } from 'vue';


onMounted(() => console.log(`AboutView mounted`))
onUnmounted(() => console.log('AboutView unmounted'))
</script>

<template>
  <div class="p-8 max-w-2xl mx-auto">
    <h1 class="text-5xl font-bold mb-4">About Us</h1>
    <p class="text-xl mb-6">Muhammad - Lab 2 - ITI</p>
    <p class="text-lg leading-relaxed">
      Welcome to our premium shoe store! We offer high-quality, stylish, and comfortable footwear for every occasion.
      From cozy sneakers to rugged boots and breezy flip-flops, we have something for everyone.
      Quality, comfort, and style — all in one place.
    </p>
  </div>
</template>