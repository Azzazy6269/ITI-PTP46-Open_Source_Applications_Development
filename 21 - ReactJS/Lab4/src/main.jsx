import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import { Provider, useSelector } from 'react-redux'


import MainLayout from './layouts/MainLayout.jsx'
import NotFound404 from './pages/NotFound404.jsx'
import Products from './pages/Products.jsx'
import AboutUs,{ErrorBoundary as AboutUsError} from './pages/AboutUs.jsx'
import Cart from './pages/Cart.jsx'
import Register from './pages/Register.jsx'
import LandingPage from './pages/LandingPage.jsx'
import ProductDetails , {ErrorBoundary as ProductDetailsError , loader as ProductDetailsLoader} from './pages/ProductDetails.jsx'
import { addToCart, removeFromCart } from './store/Redux/cartSlice.js'
import store from './store/Redux/store.js' 
import { LanguageContext } from './context/LanguageContext.jsx'
//const cart = useSelector();
const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout/>,
    children:[
      {
        index:true,
        element:<LandingPage/>
      },
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
      },
      {
        path:'/Register',
        element:<Register/>
      },
      {
      path:'*',
      element:<NotFound404/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageContext>
      <Provider store={store}>
        <RouterProvider router = {router} />
      </Provider>
    </LanguageContext>  
  </StrictMode>,
)
