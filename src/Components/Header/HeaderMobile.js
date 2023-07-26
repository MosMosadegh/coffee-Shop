import React from 'react'
import NavMobile from './NavMobile'

export default function HeaderMobile() {
  return (
    <div>
        <div className="flex md:hidden justify-between items-center h-16 px-4 bg-white dark:bg-zinc-700">
        
        {/* //* Nav Icon  */}
        <div>
        <svg className="h-8 w-8 text-zinc-700 dark:text-white ">
            <use href="#bars-3"></use>
          </svg>
        </div>
        <NavMobile/>
        {/* //* Logo Type  */}
        <div>
        <svg className="h-10 w-[100px] text-orange-300">
            <use href="#logo-type"></use>
          </svg>
        </div>
         {/* //* Card Icon  */}
        <div>
          <svg className="h-8 w-8 text-zinc-700 dark:text-white ">
            <use href="#shopping-cart"></use>
          </svg>
        </div>
      </div>
    </div>
  )
}
