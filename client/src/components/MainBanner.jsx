import React from 'react'
import { assets } from '../assets/assets'

const MainBanner = () => {
  return (
    <div className='relative'>
      <img src={assets.main_banner_bg} className='w-full hidden md:block' />
      <img src={assets.main_banner_bg_sm} className='w-full md:block' />
    </div>
  )
}

export default MainBanner
