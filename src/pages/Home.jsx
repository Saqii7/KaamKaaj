import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Body from '../components/Body'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className=''>
        <div>
            <Navbar/>
            <Hero/>
            <Body/>
            <Footer/>
        </div>
        
    </div>
  )
}

export default Home