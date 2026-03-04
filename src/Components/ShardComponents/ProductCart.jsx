import React from 'react'
import { FaStar } from 'react-icons/fa'
import { IoIosStar } from 'react-icons/io'
import { TbCurrencyTaka } from 'react-icons/tb'

const ProductCart = ({product}) => {
  return (
    <div className='mr-9'>
      <div className='flex gap-5 flex-col justify-center items-center w-72 rounded-md shadow-md'>
        <img className='w-72' src={product.image} alt="" />
      
      <div className='p-3 pl-5'>
        <p className='text-gray-500'>{product.categoryName}</p>
        <h3 className='font-semibold'>{product.name}</h3>
        <div className='flex gap-1 py-2 text-orange-600'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>
        <div className='flex text-xl gap-1'>
            <p className='cp'>
                {product.price}
            </p>
            <p><TbCurrencyTaka /></p>
            <p className='line-through text-gray-400'>{product.mrp}</p>
            <p><TbCurrencyTaka /></p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ProductCart
