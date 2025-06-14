import BLogitem from '@/Component/BLogitem'
import React from 'react'
import { blog_data } from './asset'

const BlogList = () => {
    return (
        <div>
            <div className='flex justify-center gap-6 my-10 '>
                <button className='bg-black text-white py-1 px-4 rounded-sm '>All</button>
                <button>Technology</button>
                <button>startup</button>
                <button>Lifestyle</button>
            </div>

            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {
                blog_data.map((item,index)=>{
return <BLogitem image={item.image} key={index} titile={item.titile} description={item.description} category={item.category}/>  
                })
            }
            </div>
        </div>
    )
}

export default BlogList