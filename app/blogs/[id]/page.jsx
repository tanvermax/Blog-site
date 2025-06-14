'use client'

import { asset, blog_data } from '@/app/asset/asset';
import Footer from '@/Component/Footer';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {

  // const resolvedParams = React.use(params);

  const [data, setData] = useState(null);


  const fetchBlogData = () => {

    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }

    }
  }

  useEffect(() => {
    fetchBlogData();
  }, []);


  return (data ? <>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Image src={asset.logo1} width={180} alt='' className='w-[130px] sm:w-auto' />
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 border border-black shadow-[-7px_7px_0px_#000000] '>Get started
          <Image src={asset.arrow} alt='' width={18} />
        </button>
      </div>
      <div className='text-center my-24'>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
        <Image className='mx-auto mt-6 border border-shite rounded-full' src={data.author_profile} width={60} height={60} alt='' />
        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>

      </div>
      <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt='' />
        <h1 className='my-8 text-[26px] font-semibold'>Introduction :</h1>
        <p>{data.description}</p>
        <h3 className=' my-5 text-[18px] font-semibold'> step 1: Sedf-Reflection and Goal Setting </h3>
        <p className='my-3'> before you canmanage your lifeStye, you must have a clear understanding of what you want to achive, Start by reflection on your values, aspiration, and long-term goals. </p>
        <p className='my-3'> before you canmanage your lifeStye, you must have a clear understanding of what you want to achive, Start by reflection on your values, aspiration, and long-term goals. </p>

        <h3 className=' my-5 text-[18px] font-semibold'> step 2: Sedf-Reflection and Goal Setting </h3>
        <p className='my-3'> before you canmanage your lifeStye, you must have a clear understanding of what you want to achive, Start by reflection on your values, aspiration, and long-term goals. </p>
        <p className='my-3'> before you canmanage your lifeStye, you must have a clear understanding of what you want to achive, Start by reflection on your values, aspiration, and long-term goals. </p>
        <h3 className=' my-5 text-[18px] font-semibold'> step 3: Sedf-Reflection and Goal Setting </h3>
        <p className='my-3'> before you canmanage your lifeStye, you must have a clear understanding of what you want to achive, Start by reflection on your values, aspiration, and long-term goals. </p>
        <p className='my-3'> before you canmanage your lifeStye, you must have a clear understanding of what you want to achive, Start by reflection on your values, aspiration, and long-term goals. </p>
        <h3 className=' my-5 text-[18px] font-semibold'> step 4: Sedf-Reflection and Goal Setting </h3>
        <p className='my-3'> before you canmanage your lifeStye, you must have a clear understanding of what you want to achive, Start by reflection on your values, aspiration, and long-term goals. </p>
        <p className='my-3'> before you canmanage your lifeStye, you must have a clear understanding of what you want to achive, Start by reflection on your values, aspiration, and long-term goals. </p>
        <div className='my-24'>
          <p className='text-black font-semibold my-4'>share this article on social media</p>
          <div className='flex gap-3 '>
            <Image src={asset.fb_icon} width={40}  alt='' />
            <Image src={asset.twitter} width={40} alt='' />
            <Image src={asset.google_plus} width={40} alt='' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </> : <></>
  )
}

export default page