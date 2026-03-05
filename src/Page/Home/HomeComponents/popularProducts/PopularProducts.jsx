import React, { useState } from 'react'
import SectionHeading from '../../../../Components/ShardComponents/sectionHeading'
import useData from '../../../../Hooks/useData'
import ProductCart from '../../../../Components/ShardComponents/ProductCart'
import { BiSolidCategoryAlt } from 'react-icons/bi'
import { Link } from 'react-router'

const PopularProducts = () => {
  const {categorys,products} = useData()
  const [categoryId,setCategoryId] = useState()
   
  const handleCategoryId = (id)=>{
    setCategoryId(id)
  }

  const filterProduct = categoryId? products.filter(p=> p.categoryId == categoryId): products



  return (
    <div className='container mx-auto px-24 text-black py-24 h-160'>
      <div className='flex justify-between items-centerv '>
          <SectionHeading  heading={"Popular"} colorHeading={"Products"} discription={"Shop online for new arrivals and get free shopping !"}></SectionHeading>
          <div className='flex gap-8'>
           {
            categorys.map(category=>(
              <div>
                <p onClick={()=>handleCategoryId(category?.id)} className='cursor-pointer'>{category?.name}</p>
              </div>
            ))
           }
          </div>
      </div>
      <div className='bg-white'>
        <div className='flex justify-center flex-wrap gap-4 mb-4 mt-12 bg-white'>
          {
            filterProduct
            .sort((a,b)=> b.rating - a.rating)
            .slice(0,8) 
            .map(product => <ProductCart product={product}></ProductCart>)
          }
        </div>
      </div>
      <div className='flex justify-center '>
    <Link to="/shop">
        <div className='flex cursor-pointer justify-center items-center bgp px-8 py-2 rounded-md w-74 text-white font-semibold gap-3'>
          <p>View All Prodct</p>
          <BiSolidCategoryAlt/>
        </div>
    </Link>
      </div>
    </div>
  )
}

export default PopularProducts
