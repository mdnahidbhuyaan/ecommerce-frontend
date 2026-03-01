import React from 'react'
import bg from "../../../assets/image/HERO-COVER.jpg"

const Hero = () => {
  return (
    <div className='bg-white'>
      <div style={{backgroundImage:`url(${bg})`}} className='container bg-cover my-10 h-[70vh] mx-auto px-24'>
       <div className='flex flex-col justify-center h-full items-start gap-3'>
        <h3 className='text-black cp text-2xl font-semibold'>70% off for this winter</h3>
       <h3 className='text-black text-4xl font-semibold ct'>Biggest sale for winter <br /> Men & Women</h3>
       <button className='btn bgp border-none '>Shop Now</button>
       </div>
      </div>
    </div>
  )
}

export default Hero
