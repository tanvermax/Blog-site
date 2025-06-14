import BLogitem from '@/Component/BLogitem'
import React, { useState } from 'react'
import { blog_data } from '../app/asset/asset'

const BlogList = () => {

    const [menu, setMenu] = useState('All');


    return (
        <div>
            <div className='flex justify-center gap-6 my-10 '>
                <button onClick={() => setMenu("All")} className={menu === "All" ? `bg-black text-white py-1 px-4 rounded-sm ` : " "}>All</button>
                <button onClick={() => setMenu("Technology")} className={menu === "Technology" ? `bg-black text-white py-1 px-4 rounded-sm ` : " "}>Technology</button>
                <button onClick={() => setMenu("Programming")} className={menu === "Programming" ? `bg-black text-white py-1 px-4 rounded-sm ` : " "}>Programming</button>
                <button onClick={() => setMenu("Blockchain")} className={menu === "Blockchain" ? `bg-black text-white py-1 px-4 rounded-sm ` : " "}>Blockchain</button>
                <button onClick={() => setMenu("Security")} className={menu === "Security" ? `bg-black text-white py-1 px-4 rounded-sm ` : " "}>Security</button>
                <button onClick={() => setMenu("Backend")} className={menu === "Backend" ? `bg-black text-white py-1 px-4 rounded-sm ` : " "}>Backend</button>
                <button onClick={() => setMenu("CSS")} className={menu === "CSS" ? `bg-black text-white py-1 px-4 rounded-sm ` : " "}>CSS</button>
                <button onClick={() => setMenu("Design")} className={menu === "Design" ? `bg-black text-white py-1 px-4 rounded-sm ` : " "}>Design</button>
                <button onClick={() => setMenu("Mobile")} className={menu === "Mobile" ? `bg-black text-white py-1 px-4 rounded-sm ` : " "}>Mobile</button>
                <button onClick={() => setMenu("Accessibility")} className={menu === "Accessibility" ? `bg-black text-white py-1 px-4 rounded-sm ` : " "}>Accessibility</button>
                <button onClick={() => setMenu("Cloud")} className={menu === "Cloud" ? `bg-black text-white py-1 px-4 rounded-sm ` : " "}>Cloud</button>
            </div>

            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                {
                    blog_data.filter(item => menu === "All" ? true : item.category === menu).map((item, index) => {
                        return <BLogitem id={item.id} image={item.image} key={index} title={item.title} description={item.description} category={item.category} />
                    })
                }
            </div>
        </div>
    )
}

export default BlogList