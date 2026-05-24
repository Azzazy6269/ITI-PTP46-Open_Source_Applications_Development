import React from 'react'
import {Outlet, useNavigation} from 'react-router'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import { LanguageProvider } from '../context/LanguageContext'
const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <>
    <LanguageProvider>
        <NavBar/>
        <main >
            {navigation.state==='loading' && <Loading/>}
            <Outlet/>
        </main>
        <Footer/>
    </LanguageProvider>
    </>
  )
}

export default MainLayout