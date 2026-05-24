import React , {useContext} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import store from './../store/Redux/store.js'
import { useTheme } from '../store/Zustand/useThemeStore'
import { removeFromCart } from '../store/Redux/cartSlice.js';
import { Link } from 'react-router';
import {LanguageContext} from '../context/LanguageContext'

const Cart = () => {
  const products = useSelector((state) => state.cart.items);
  const Plength = products.length
  const theme = useTheme((state)=>state.theme);
  const dispatch = useDispatch();
  const {language}=useContext(LanguageContext);
  const removeFromCartHandler = (id)=>{
    dispatch(removeFromCart(id));
  }
  return (
    <div className='pt-16'>
    {!products.length && (
  <div className={`${theme === 'light' ? 'bg-base-100' : 'bg-gray-900'} min-h-screen w-full flex flex-col justify-center items-center px-4`}>
    <div className="max-w-md w-full text-center space-y-8">
      <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-7xl font-extrabold tracking-widest animate-bounce `}>
        {language==='en'?'Empty Cart':'السلة فارغة'}
      </h1>
      
      <p className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>
        {language==='en'?"You haven't added any items!":'لم تقم بإضافة اى منتج للسلة'}
      </p>

      <div className="pt-4">
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-md"
        >
          {language==='en'?'Go back home':'انتقل للصفخة الرئيسية'}
        </Link>
      </div>
    </div>
  </div>
)}
    {Plength && <div className={`${theme==='light'? 'bg-base-100':'bg-gray-900'}`}>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {products && products.map(p=>(
          <li key={p.id}>
            <div className={`card w-96 mb-4 shadow-sm ${theme==='light'? 'bg-base-100':'bg-gray-300'}`}>
              <figure >
                <img className=' w-auto h-96'
                  src={p.image}
                  alt={p.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title min-h-24">{p.title}</h2>
                <p>{p.description.substring(0,75)}....</p>
                <p>{p.category}</p>
                <p>{p.price}</p>
                {p.price>100 ?  <p className='badge badge-primary max-h-10'>{language==='en'?'Premium':'مميز'}</p>:<p className='badge badge-secondary max-h-10'>{language==='en'?'Best-Seller':'الأكثر مبيعا'}</p>}
                <div className="card-actions justify-end">
                  <button className="btn btn-primary" onClick={()=>removeFromCartHandler(p.id)}>{language==='en'?'Remove from cart':'حذف من السلة'}</button>
                </div>
              </div>
            </div>
          </li>
        ))}
        
      </ul>
    </div>}
    
    </div>
  )
}

export default Cart