import { defineStore } from "pinia";
import { ref } from "vue";
import { useFetch } from '@vueuse/core';
import {useCartStore} from '@/store/cart'
import { storeToRefs } from "pinia";


export const useProductsStore = defineStore('product',()=>
{
    const products = ref([]);
    const matchedProduct = ref({});
    const relatedProducts = ref([]);
    const CartStore = useCartStore();
    const { totalItems } = storeToRefs(CartStore);
    const { addToCart } =CartStore


    const fetchAllProducts = async()=>{
        const {data ,error , statusCode} = await useFetch("http://localhost:3000/products").json();
       //console.log(`fetch all products statusCode : ${statusCode.value} , data : ${data.value} , error: ${error.value}`);
        if(error.value){
            console.log(`error : ${error.value}`);
        }else if(statusCode.value==200){
            products.value = data.value;
            console.log(`store data in products.value`);
        }else{
            console.log("unexpected behaviour");
        }

    }
    const getProductById =async (id)=>{
        const url = `http://localhost:3000/products/${id}`;
        const {data ,error , statusCode} = await useFetch(url).json();
       //console.log(`fetch all products statusCode : ${statusCode.value} , data : ${data.value} , error: ${error.value}`);
        if(error.value){
            console.log(`error : ${error.value}`)
        }else if(statusCode.value==200){
            console.log(`assign matchedProduct and relatedProducts to their data`)
            matchedProduct.value =  await data.value;
            relatedProducts.value = products.value.filter((p) => p.id != id);
        }else{
            console.log(`unexpected behaviour`);
        }
        
        console.log(`products from store : ${products}`)
        console.log(`matchedProduct from store: ${matchedProduct}`);
        console.log(`relatedProducts from store : ${relatedProducts}`);
    }
    const decreaseQuantityByOne = async()=>{
        const id = matchedProduct.value.id;
        const url = `http://localhost:3000/products/${id}`;
        const {data ,error , statusCode} = await useFetch(url).json();
        if(error.value){
            console.log(`error : ${error.value}`);
        }else if(statusCode.value==200){
            let product = data.value;
            if(product.stock > 0){
                await useFetch(url,{
                    method:"PUT",
                    headers: {"Content-Type": "application/json"},
                    body:JSON.stringify({
                        id:product.id,
                        name:product.name,
                        description:product.description,
                        image:product.image,
                        badge:product.badge,
                        price:product.price,
                        discount:product.discount,
                        stock:product.stock-1,
                        tags:product.tags
                    })
                });
                matchedProduct.value.stock = product.stock-1;
                addToCart(matchedProduct.value);
                return true
            }else{
                matchedProduct.value = product;
                return false
            }
        }else{
            console.log(`unexpected behaviour`)
        }
        
        
    }
    return{
        products,
        matchedProduct,
        relatedProducts,
        fetchAllProducts,
        getProductById,
        decreaseQuantityByOne
    }
})