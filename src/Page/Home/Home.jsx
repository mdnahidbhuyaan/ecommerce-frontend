import React from 'react'
import Hero from './HomeComponents/Hero'
import HomeCategory from './HomeComponents/HomeCategory'
import PopularProducts from './HomeComponents/popularProducts/PopularProducts'

const Home = () => {
  return (
    <div className='bg-white'>
      <Hero/>
      <HomeCategory/>
      <PopularProducts/>
    </div>
  )
}

export default Home
