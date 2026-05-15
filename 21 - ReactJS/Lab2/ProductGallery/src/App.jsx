import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError ] = useState(null);

  useEffect(()=>{
    (async()=>{
      setIsLoading(true);
      setError(null);
      try{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
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
    <>
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
        <input type="search" name="searchKeyWord" required placeholder="Search"
          onChange={(e)=>setSearchKeyWord(e.target.value)}
        />
        </label>
      </div>
      {isLoading && <h1>loading.......</h1>}
      {error && <h1>{error}</h1>}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products && products.map(p=>(
          <li key={p.id}>
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src={p.image}
                  alt={p.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{p.title}</h2>
                <p>{p.description}</p>
                <p>{p.category}</p>
                <p>{p.price}</p>
                {p.price>100 ? <p>premium</p>:<p>best-seller</p>}
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </li>
        ))}
        
      </ul>
    </>
  )
}

export default App
