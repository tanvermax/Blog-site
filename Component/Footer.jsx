import { asset } from '@/app/asset/asset'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:flex-row bg-black items-center'>
        <Image src={asset.logo_night} alt='' width={120} />
    </div>
  )
}

export default Footer