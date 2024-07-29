import React from 'react'
import Header from '../Layout/Header'
import Sidebar from '../Layout/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from '../Layout/Footer'
 

const Home = () => {
  return (
    <>
      <Header/>
      <Sidebar/>
      <div className='client-main'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default Home