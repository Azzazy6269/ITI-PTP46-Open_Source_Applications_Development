<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  console.log("CarouselBanner component mounted")
})

onUnmounted(() => {
  console.log("CarouselBanner component unmounted")
})
</script>

<template>
  <div class="carousel w-full h-[50vh] relative">
    <!-- Slide 1 -->
    <div id="slide1" class="carousel-item relative w-full h-full">
      <img 
        src="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/a5b1b6c5-6b76-4aa9-951c-6a232d7deef9._CR0,309,1501,786_SX920_CB1169409_QL70_.jpg" 
        class="w-full h-full object-cover" 
        alt="Banner 1" 
      />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
        <a href="#slide3" class="btn btn-circle">❮</a>
        <a href="#slide2" class="btn btn-circle">❯</a>
      </div>
    </div>

    <!-- Slide 2 -->
    <div id="slide2" class="carousel-item relative w-full h-full">
      <img 
        src="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/cb8db32d-5908-427d-97d3-84bd330adfa6._CR79,0,3374,1766_SX920_CB1169409_QL70_.jpg" 
        class="w-full h-full object-cover" 
        alt="Banner 2" 
      />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
        <a href="#slide1" class="btn btn-circle">❮</a>
        <a href="#slide3" class="btn btn-circle">❯</a>
      </div>
    </div>

    <!-- Slide 3 -->
    <div id="slide3" class="carousel-item relative w-full h-full">
      <img 
        src="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/57990908-e98b-488c-8968-a1a725ec7609._CR0,76,1550,812_SX920_CB1169409_QL70_.png" 
        class="w-full h-full object-cover" 
        alt="Banner 3" 
      />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
        <a href="#slide2" class="btn btn-circle">❮</a>
        <a href="#slide1" class="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
</template>