import React from 'react'
import {Outlet, useNavigation} from 'react-router'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <>
        <NavBar/>
        <main>
            {navigation.state==='loading' && <Loading/>}
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default MainLayout