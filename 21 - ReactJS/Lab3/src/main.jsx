import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'

import MainLayout from './layouts/MainLayout.jsx'
import NotFound404 from './pages/NotFound404.jsx'
import Products from './pages/Products.jsx'
import AboutUs,{ErrorBoundary as AboutUsError} from './pages/AboutUs.jsx'
import Cart from './pages/Cart.jsx'
import ProductDetails , {ErrorBoundary as ProductDetailsError , loader as ProductDetailsLoader} from './pages/ProductDetails.jsx'

const router = createBrowserRouter([
  {
    path:'*',
    element:<NotFound404/>
  },
  {
    path:'/',
    element:<MainLayout/>,
    children:[
      {
        path:'/products',
        element:<Products/>
      },
      {
        path:'/aboutUs',
        lazy: async ()=>{
          const module = await import('./pages/AboutUs.jsx')
          return {
            Component : module.default,
            ErrorBoundary:module.ErrorBoundary
          }
        }
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/ProductDetails/:id',
        element:<ProductDetails/>,
        ErrorBoundary:ProductDetailsError,
        loader:ProductDetailsLoader
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
