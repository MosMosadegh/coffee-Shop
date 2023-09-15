import React from 'react'

export default function ProductCategory() {
    const category = [
        {id:1, img:'images/categories/category1.png', alt:'C1', title:'قهوه دمی و اسپرسو'},
        {id:2, img:'images/categories/category2.png', alt:'C2', title:'لوازم جانبی و تجهیزات'},
        {id:3, img:'images/categories/category3.png', alt:'C3', title:'اسپرسو ساز'},
        {id:4, img:'images/categories/category4.png', alt:'C4', title:'پک تستر قهوه'},
        {id:5, img:'images/categories/category5.png', alt:'C5', title:'قهوه ترک'},
    ]
  return (
    <div className='flex-center gap-y-6 gap-x-[29px] md:gap-[45px] flex-wrap mb-10 md:mb-20'>
        {category.map((item)=> (
        <div key={item.id} className='w-25 md:w-50 text-center'>
            <a href="#">
            <img src={item.img} loading='lazy' alt={item.alt}/>
            </a>
            <span className='inline-block font-DanaDemiBold text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:mt-2.5'>{item.title}</span>
        </div>
        ))}
    </div>
  )
}
