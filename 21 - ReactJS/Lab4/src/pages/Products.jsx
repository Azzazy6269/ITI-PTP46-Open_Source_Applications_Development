import React from 'react'
import { useEffect, useState , useContext } from 'react'
import { NavLink } from 'react-router';
import ProductDetails from './ProductDetails'
import Error from '../components/Error';
import Loading from '../components/Loading';
import { instance } from '../AxiosInstance';
import { useTheme } from '../store/Zustand/useThemeStore'
import {LanguageContext} from '../context/LanguageContext'


const Products = () => {
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError ] = useState(null);
  const theme = useTheme((state)=>state.theme);
  const {language}=useContext(LanguageContext);

  useEffect(()=>{
    (async()=>{
      setIsLoading(true);
      setError(null);
      try{
        //const response = await fetch("https://fakestoreapi.com/products");
        const response = await instance.get();
        const data = await response.data;
        if(searchKeyWord !==""){setProducts(data.filter(p=>p.title.startsWith(searchKeyWord)));}
        else{setProducts(data);}
        console.log(products);
      }catch(err){
        setError(err);
      }finally{
        setIsLoading(false);
      }
    })()
  },[searchKeyWord])
  return (
    <div className={`${theme==='light'? 'bg-base-100':'bg-gray-900'}`}>
      <div className="navbar mb-4">
        <label className="input" htmlFor="searchKeyWord">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" name="searchKeyWord" required placeholder={language==='en'?'Search':'بحث'}
          onChange={(e)=>setSearchKeyWord(e.target.value)}
        />
        </label>
      </div>
      {isLoading &&<Loading/>}
      {error && (<div><Error/></div>)}
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
                {p.price>100 ? <p className='badge badge-primary max-h-10'>{language==='en'?'Premium':'مميز'}</p>:<p className='badge badge-secondary max-h-10'>{language==='en'?'Best-Seller':'الأكثر مبيعا'}</p>}
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                  <NavLink to={`/ProductDetails/${p.id}`}>{language==='en'?'Details':'تفاصيل'}</NavLink></button>
                </div>
              </div>
            </div>
          </li>
        ))}
        
      </ul>
    </div>
  )

}

export default Products



