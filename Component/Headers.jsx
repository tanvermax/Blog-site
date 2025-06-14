import { asset } from '@/app/asset/asset'
import Image from 'next/image'
import React from 'react'

function Headers() {
    return (
        <div className='py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <Image src={asset.logo1} width={180} alt='' className='w-[130] sm:w-auto' />
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid shadow-[-7px_7px_0px_#000000] border-black'>Get Started</button>
                
            </div>
            <div className='text-center my-8'>
                <h1 className='text-3xl font-medium sm:text-5xl'>Latest Blogs</h1>
                <p className='mt-10 max-w-[740px] mx-auto text-xs sm:text-base '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, cum praesentium, facilis deleniti atque, facere possimus reprehenderit quidem optio saepe commodi laudantium ?</p>
                <form action="" className='flex  justify-between max-w-[500px]  scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000] border-solid bg-white'>
                    <input type="email" placeholder='Enter Your Email'  className='pl-4 outline-none '/>

                    <button type='submit' className='border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>

                </form>
            </div>
        </div>
    )
}

export default Headers