<script setup>
import { RouterLink } from 'vue-router'
import { onMounted , onUnmounted } from 'vue';


onMounted (()=>{
  console.log("navbar component mounted")
})
onUnmounted(()=>{
  console.log("navbar component unmounted")
})
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/product/1">Products</RouterLink></li>
          <li><RouterLink to="/cart">Cart</RouterLink></li>
        </ul>
      </div>
      <a class="btn btn-ghost text-xl">Navbar</a>
    </div>

    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/product/1">Products</RouterLink></li>
          <li><RouterLink to="/cart">Cart</RouterLink></li>
      </ul>
    </div>

    <div class="navbar-end">
      <div class="flex gap-2">
        <input class="input input-bordered input-sm" type="search" placeholder="Search" />
        <button class="btn btn-outline btn-success btn-sm">Search</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>