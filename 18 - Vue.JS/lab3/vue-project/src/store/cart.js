import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useFetch , useLocalStorage } from '@vueuse/core';


export const  useCartStore = defineStore('cart',()=>{
    const items = useLocalStorage('cart', [])
    const totalItems = computed(()=>{
        let total = 0;
        for(let i=0 ; i<items.value.length;i++){
            total += items.value[i].quantity
        }
        return total;
    })
    const totalPrice = computed(()=>{
        let total = 0;
        for(let i=0 ; i<items.value.length;i++){
            total += items.value[i].price
        }
        return total;
    })

    const addToCart =(matchedProduct)=>{    
        const product = items.value.find(p => p.id === matchedProduct.id)
        if(product == null)
        {
            console.log(`create new object in cart for new item`)
            items.value.push({"id":matchedProduct.id , "name":matchedProduct.name , "quantity":1 ,"price" : matchedProduct.price})
        }else{
            console.log(`increase quantity`)
            product.quantity++;
        }
        console.log(`cart : ${items}`);
    } 

    const deleteFromCart =(productId)=>{
        const newItems = items.value.filter(p => p.id !== productId);
        items.value = newItems;
    }
    const clearCart = async () => {
    for (let i = 0; i < items.value.length; i++) {
        const cartItem = items.value[i];
        const url = `http://localhost:3000/products/${cartItem.id}`;

        try {
            // 1. Get current product data
            const res = await fetch(url);
            if (!res.ok) {
                console.log(`Failed to fetch product ${cartItem.id}`);
                continue; // skip this item, don't stop the whole loop
            }
            const product = await res.json();

            // 2. Restore stock
            await fetch(url, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...product,
                    stock: product.stock + cartItem.quantity // ✅ restore
                })
            });

        } catch (err) {
            console.log(`Error restoring stock for product ${cartItem.id}:`, err);
        }
    }

    items.value = []; // ✅ clear after restoring all stock
}
    return{
        items,
        totalItems,
        totalPrice,
        addToCart,
        deleteFromCart,
        clearCart
    }
})