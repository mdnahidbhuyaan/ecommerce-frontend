import React from 'react'
import nahidLogo from "../../../assets/image/nahidLogo.png"
import { CiUser } from 'react-icons/ci'
import { BiShoppingBag } from 'react-icons/bi'

const MinHeader = () => {
  return (
    <div className='bg-white'>
      <div className='flex items-center justify-between container mx-auto px-24'>
        <img className='w-22' src={nahidLogo} alt="" />
        <div>
<label className="input outline-none">
  <svg className="h-[1.5em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
  <input type="search " className='pr-48' required placeholder="Search" />
</label>
        </div>
        <div className='flex items-center gap-5'>
          <div className='flex items-center gap-1'>
            <CiUser className='text-black text-2xl'/>
            <div>
              <p className='text-black ct text-xs'>Account</p>
              <p className='text-black ts'>Login</p>
            </div>
          </div>
                 <div className='flex items-center gap-1'>
            <BiShoppingBag  className='text-black text-2xl'/>
            <div>
              <p className='text-black ct text-xs'>Account</p>
              <p className='text-black ts'>Login</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MinHeader
