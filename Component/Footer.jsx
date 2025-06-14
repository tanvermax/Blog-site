import { asset } from '@/app/asset/asset'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:flex-row bg-black items-center'>
        <Image src={asset.logo_night} alt='' width={120} />
        <p className='text-white'>All right reserves. Copyright@blogger</p>
        <div className='flex gap-2'>
          <Image src={asset.fb_icon} alt='' width={40} />
          <Image src={asset.twitter} alt='' width={40} />
          <Image src={asset.google_plus} alt='' width={40} />
        </div>
    </div>
  )
}

export default Footer