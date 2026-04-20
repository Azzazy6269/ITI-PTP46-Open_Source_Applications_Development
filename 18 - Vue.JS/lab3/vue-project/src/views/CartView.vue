<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import { useCartStore } from '@/store/cart'
import { storeToRefs } from "pinia"

const cartStore = useCartStore()
const { items, totalItems, totalPrice } = storeToRefs(cartStore)
const { deleteFromCart, clearCart } = cartStore

onMounted(() => {
  console.log('CartView mounted')
  console.log('Items length:', items.value?.length)
  console.log('Items content:', items.value)
})

watch(items, (newItems) => {
  console.log('🛒 Items changed - new length:', newItems?.length)
}, { immediate: true })

onUnmounted(() => {
  console.log('CartView unmounted')
})
</script>

<template>
  <div class="p-8 max-w-6xl mx-auto">
    <h1 class="text-4xl font-bold mb-8">Your Cart</h1>

    <div v-if="!items || items.length === 0" class="text-center py-20">
      <p class="text-3xl text-gray-500">Your cart is empty 🛒</p>
      <p class="text-sm text-gray-400 mt-2">items.length = {{ items?.length }}</p>
    </div>

    <div v-else class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th class="text-left">Product</th>
            <th class="text-right">Unit Price</th>
            <th class="text-center">Quantity</th>
            <th class="text-right">Subtotal</th>
            <th class="w-20"></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td class="font-medium">{{ item.name }}</td>
            <td class="text-right">{{ item.price || 0 }} EGP</td>
            <td class="text-center">{{ item.quantity }}</td>
            <td class="text-right font-bold">
              {{ ((item.price || 0) * item.quantity).toFixed(2) }} EGP
            </td>
            <td>
              <button
                @click="deleteFromCart(item.id)"
                class="btn btn-ghost btn-sm text-red-500">
                ✕
              </button>
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr class="bg-base-200 font-bold">
            <td colspan="3" class="text-right text-lg">Total</td>
            <td class="text-right text-2xl text-success">
              {{ (totalPrice||0).toFixed(2) }} EGP
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div v-if="items && items.length > 0" class="flex justify-between mt-10">
      <button @click="clearCart" class="btn btn-outline btn-error">
        Clear Cart
      </button>
      <div class="text-right">
        <div>Total Items: <span class="font-bold">{{ totalItems }}</span></div>
        <button class="btn btn-primary btn-lg mt-4">Proceed to Checkout</button>
      </div>
    </div>

  </div>
</template>