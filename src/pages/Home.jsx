import React from 'react'
import Hero from '../components/Hero'
import Body from '../components/Body'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <div className='flex flex-col flex-nowrap items-center justify-center'>
            
            <Hero/>
            <Body/>
            
        </div>
        
    </div>
  )
}

export default Home