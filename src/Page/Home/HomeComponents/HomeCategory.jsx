import React, { useState,useEffect } from 'react'

const HomeCategory = () => {
    const [categorys,setCategory] = useState([])
    useEffect(()=>{
  fetch("category.json")
  .then(res=>res.json())
  .then(data=>setCategory(data))
    },[])
  return (
    <div className='container mx-auto px-24'>
      <div className='flex justify-center gap-18'>
        {categorys.map(category=>(
          <div className='flex flex-col items-center text-center bg-gray-100 rounded-md shadow-md px-12 py-4'>
              <img className='w-16 h-16 mb-3' src={category.image} alt="" />
            <p className='text-gray-700'>{category.name}</p>
            <p className=' text-xs text-gray-800'>{category.items} items</p>
          </div>
         
        ))}
      </div>
    </div>
  )
}

export default HomeCategory
