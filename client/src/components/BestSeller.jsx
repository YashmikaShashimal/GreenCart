import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext'

const BestSeller = () => {

  const { products } = useAppContext();

  return (
    <div>
      <div className='mt-16'>
        <p className='text-2xl font-medium md:text-3xl'>Best Sellers</p>
        <div>
          <ProductCard product={products[0]}/>
        </div>
      </div>
    </div>
  )
}

export default BestSeller
