import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { PiWhatsappLogo } from 'react-icons/pi';


const TopHeader = () => {
  return (
    <div className='bg-[#f8f8fb] py-2'>
     <div className='flex justify-between items-center container mx-auto px-24'>
              <div className='flex items-center gap-12 ct'>
        <div className='flex items-center gap-2'>
            <FiPhoneCall />
            <p className='text-[12px] ct'>+91 123456789</p>
        </div>
        <div className='flex items-center gap-2'>
                  <PiWhatsappLogo />
                    <p className='text-[12px] '>01425636872</p>
        </div>
      </div>
      <div>
        <p className='text-[12px] ct'>World's fastest Online Shopping Destination</p>
      </div>
      <div className='flex items-center ct text-[12px] gap-5'>
        <p>Help?</p>
        <p>Trac Order?</p>
        <p>English</p>
        <p>Contact US</p>
      </div>
     </div>
    </div>
  )
}

export default TopHeader
