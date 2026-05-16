import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Error from './../components/Error'
import { instance } from '../AxiosInstance';


//loader and errorBoundary is a replcement of useState,useEffect,isLoading,error
export const ErrorBoundary = ()=>{
  return (
    <Error/>
  )
}

export const loader =async ({params})=>{
    const response = await instance.get(`${params.id}`)
    return response.data;
}


const ProductDetails = () => {
  const { id } = useParams();
  const product = useLoaderData();
  //const [product, setProduct] = useState(null);
  //const [isLoading, setIsLoading] = useState(false);
  //const [error, setError] = useState(null);
/*
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }

        const data = await response.json();
        setProduct(data);

        console.log(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);
*/

  return (
    <>
    {product&&(
      <div className="card lg:card-side bg-base-100 shadow-sm  m-20">
      <figure>
        <img 
          src={product.image}
          alt={product.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.category}</p>
        <p>${product.price.toFixed(2)}</p>
        {product.price > 100 ? <p className='badge badge-primary max-h-10'>premium</p> : <p className='badge badge-secondary max-h-10'>best-seller</p>}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
    )}
      
    </>
  );
};

export default ProductDetails;