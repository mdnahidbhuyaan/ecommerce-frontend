import React from 'react'
import SectionHeading from '../../../../Components/ShardComponents/sectionHeading'
import useData from '../../../../Hooks/useData'
import ProductCart from '../../../../Components/ShardComponents/ProductCart'

const PopularProducts = () => {
  const {categorys,products} = useData()
  return (
    <div className='container mx-auto px-24 text-black py-24'>
      <div className='flex justify-between items-center'>
          <SectionHeading  heading={"Popular"} colorHeading={"Products"} discription={"Shop online for new arrivals and get free shopping !"}></SectionHeading>
          <div className='flex gap-8'>
           {
            categorys.map(category=>(
              <div>
                <p className='cursor-pointer'>{category.name}</p>
              </div>
            ))
           }
          </div>
      </div>
      <div>
        <div className='flex justify-center flex-wrap gap-4 my-12'>
          {
            products.map(product => <ProductCart product={product}></ProductCart>)
          }
        </div>
      </div>
    </div>
  )
}

export default PopularProducts
