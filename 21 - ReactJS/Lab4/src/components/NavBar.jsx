import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router'
import { useTheme } from '../store/Zustand/useThemeStore'
import { useSelector } from 'react-redux';
import { LanguageContext } from '../context/LanguageContext';

const NavBar = () => {

    const theme = useTheme((state)=>state.theme);
    const toggleTheme = useTheme((state)=>state.toggleTheme);
    const cartItems = useSelector((state) => state.cart.items);
    const {language,toggleLanguage}=useContext(LanguageContext);
  return (
    <>
        <div className={`navbar 
                ${theme === 'light' ? 'bg-base-100' : 'bg-black'} 
                shadow-sm fixed top-0 left-0 w-full z-50 mb-32`}>
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="cursor-pointer" >
                <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 40 40" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:scale-105 transition-transform"
                >
                    <rect x="8" y="10" width="24" height="4" rx="2" className="fill-primary" />
                    <rect x="8" y="18" width="24" height="4" rx="2" className="fill-primary opacity-70" />
                    <rect x="8" y="26" width="24" height="4" rx="2" className="fill-primary opacity-40" />
                </svg>                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><NavLink
                        to='/products'
                        className={({ isActive }) =>
                            `font-medium ${isActive ? 'text-blue-600' : 'hover:text-blue-600'}`
                        }>
                        {language==='en'?'Products':'المنتجات'}</NavLink></li>
                    <li><NavLink
                        to='/cart'
                        className={({ isActive }) =>
                            `font-medium ${isActive ? 'text-blue-600' : 'hover:text-blue-600'}`
                        }>{language==='en'?'Cart':'السلة'} - {cartItems.length}</NavLink></li>
                    <li><NavLink
                        to='/aboutUs'
                        className={({ isActive }) =>
                            `font-medium ${isActive ? 'text-blue-600' : 'hover:text-blue-600'}`
                        }>{language==='en'?'About Us':'عنا'}</NavLink></li>
                    <li><NavLink
                        to='/aboutUs'
                        className={({ isActive }) =>
                            `font-medium ${isActive ? 'text-blue-600' : 'hover:text-blue-600'}`
                        }>{language==='en'?'Login':'تسجيل الدخول'}</NavLink></li>
                    <li><NavLink
                        to='/aboutUs'
                        className={({ isActive }) =>
                            `font-medium ${isActive ? 'text-blue-600' : 'hover:text-blue-600'}`
                        }>{language==='en'?'Our Policies':'سياستنا'}</NavLink></li>
                    <li><NavLink
                        to='/aboutUs'
                        className={({ isActive }) =>
                            `font-medium ${isActive ? 'text-blue-600' : 'hover:text-blue-600'}`
                        }>{language==='en'?'Complaints and Suggestions':'الشكاوى و المقترحات'}</NavLink></li>
                    <li><NavLink
                        to='/aboutUs'
                        className={({ isActive }) =>
                            `font-medium ${isActive ? 'text-blue-600' : 'hover:text-blue-600'}`
                        }>{language==='en'?'Our Partners':'شركائنا'}</NavLink></li>
                    <li><NavLink
                        to='/aboutUs'
                        className={({ isActive }) =>
                            `font-medium ${isActive ? 'text-blue-600' : 'hover:text-blue-600'}`
                        }>{language==='en'?'Developers':'المطورون'}</NavLink></li>
                </ul>
                </div>
                <NavLink to="/" className="flex items-center gap-2 group transition-all duration-300">
                

                <div className="flex flex-col leading-none">
                    <span className={`text-xl font-black tracking-tight ${theme === 'dark' ? 'text-white' : 'text-neutral'}`}>
                    ROFOUF
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
                    Market
                    </span>
                </div>
                </NavLink>            
                </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><NavLink
                        to='/products'
                        className={({ isActive }) =>
                            `font-medium 
                            ${theme==='light'? 'text-black':'text-white'}
                            ${isActive ? '!text-blue-600' : 'hover:text-blue-600'}
                            `
                        }>{language==='en'?'Products':'المنتجات'}</NavLink></li>
                <li><NavLink
                        to='/cart'
                        className={({ isActive }) =>
                            `font-medium 
                            ${theme==='light'? 'text-black':'text-white'}
                            ${isActive ? '!text-blue-600' : 'hover:text-blue-600'}
                            `
                        }>{language==='en'?'Cart':'السلة'} - {cartItems.length}</NavLink></li>
                <li><NavLink
                        to='/aboutUs'
                        className={({ isActive }) =>
                            `font-medium 
                            ${theme==='light'? 'text-black':'text-white'}
                            ${isActive ? '!text-blue-600' : 'hover:text-blue-600'}
                            `
                        }>{language==='en'?'About Us':'عنا'}</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="rounded-2xl btn btn-soft btn-primary m-1.5"><NavLink to= '/Register'>{language==='en'?'Login':'تسجيل الدخول'}</NavLink></button>
                <button className="rounded-2xl btn btn-soft btn-secondary" onClick={toggleTheme}>{theme==='light'?'☀️':'🌙'}</button>
                <button className={`mx-1 btn btn-xs btn-outline ${theme==='light'?'text-black':'text-white'}`} onClick={()=>{toggleLanguage()}}>{language}</button>
            </div>
        </div>
    </>
  )
}

export default NavBar