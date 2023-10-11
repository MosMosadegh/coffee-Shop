import React, { useState } from "react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { NavLink } from "react-router-dom";


export default function NavMobile({isShowNavMobile, setIsShowNavMobile}) {
  
  const [isShowSubmenu, setIsShowSubmenu] = useState(false);
  const toggleHandler = () => {
    setIsShowSubmenu((prevIsShowSubmenu) => !prevIsShowSubmenu);
  };

  return (
    <div className={`fixed top-0 bottom-0 w-64 overflow-y-auto py-3 px-4 bg-white dark:bg-zinc-700 z-20 transition-all ${isShowNavMobile ? "right-0" : "-right-64"}`}>
      {/* //* NAV Header */}
      <div className="flex justify-between items-center pb-5 mb-6 border-b border-b-gray-100 dark:border-b-white/10 ">
        <div className="flex gap-x-3.5 ">
          <svg className="h-10 w-[41px] text-orange-300">
            <use href="#logo"></use>
          </svg>
          <svg className="h-10 w-[100px] text-orange-300">
            <use href="#logo-type"></use>
          </svg>
        </div>
        <svg className="h-5 w-5 text-zinc-600 dark:text-white" onClick={() =>{setIsShowNavMobile(false)}}>
          <use href="#x-mark"></use>
        </svg>
      </div>

      {/* //* NAVBAR */}
      <div>
        <ul className="sidBar-link flex flex-col space-y-6 child:px-2.5 text-zinc-600 dark:text-white">
          <NavLink to="/" className="inline-flex items-center gap-x-2">
            <svg className="h-5 w-5">
              <use href="#home"></use>
            </svg>
            صفحه اصلی
          </NavLink>
          <div>
            
              <NavLink to="/shop" className="flex items-center" >
                <div className="flex items-center pl-3 justify-between w-full" onClick={toggleHandler}>
                  <div className="flex items-center gap-x-2">
                    <svg className="h-5 w-5">
                      <use href="#shopping-cart"></use>
                    </svg>
                    فروشگاه
                  </div>
                  <div>
                    {isShowSubmenu ? (
                      <svg className="h-4 w-4">
                        <use href="#chevron-down"></use>
                      </svg>
                    ) : (
                      <svg className="h-4 w-4">
                        <use href="#chevron-up"></use>
                      </svg>
                    )}
                  </div>
                </div>
              </NavLink>
            </div>
            <div>
              {isShowSubmenu && (
                <div className="submenu">
                  <a href="#">قهوه ویژه</a>
                  <a href="#">ویژه در سطح جهانی</a>
                  <a href="#">قهوه درجه یک</a>
                  <a href="#">ترکیبات تجاری</a>
                  <a href="#">کپسول قهوه</a>
                  <a href="#">قهوه زینو برزیلی</a>
                </div>
              )}
            
          </div>
          <NavLink
            to="/dictionary"
            className="inline-flex items-center gap-x-2"
          >
            <svg className="h-5 w-5">
              <use href="#chat-bubble"></use>
            </svg>
            دیکشنری
          </NavLink>

          <NavLink to="/about" className="inline-flex items-center gap-x-2">
            <svg className="h-5 w-5">
              <use href="#briefcase"></use>
            </svg>
            درباره ما
          </NavLink>

          <NavLink to="/blog" className="inline-flex items-center gap-x-2">
            <svg className="h-5 w-5">
              <use href="#document-text"></use>
            </svg>
            بلاگ
          </NavLink>

          <NavLink to="/contact" className="inline-flex items-center gap-x-2">
            <svg className="h-5 w-5">
              <use href="#phone"></use>
            </svg>
            تماس با ما
          </NavLink>
        </ul>
      </div>

      {/* //*NAV Footer  */}
      <div className="flex flex-col items-start space-y-6 py-8 px-2.5 mt-8 border-t border-t-gray-100 dark:border-t-white/10 text-orange-300">
        {/* //* Login Link  */}
        <a href="#" className="inline-flex items-center gap-x-2">
          <svg className="h-5 w-5 rotate-180">
            <use href="#arrow-left-on-rectangle"></use>
          </svg>
          <span className="">ورود | ثبت‌ نام</span>
        </a>
        {/* //* Theme Toggle  */}
        <div className="flex items-center gap-x-2">
          <Flowbite className="h-5 w-5">
            <DarkThemeToggle className="text-orange-300 p-0  focus:ring-0  dark:text-orange-300" />
          </Flowbite>
          <span className="inline-block dark:hidden"> تم تیره</span>
          <span className="hidden dark:inline-block "> تم روشن</span>
        </div>
        {/* //* Card Box   */}
        <a href="#" className="inline-flex items-center gap-x-2 ">
          <svg className="h-5 w-5">
            <use href="#shopping-cart"></use>
          </svg>
          سبد خرید
        </a>
      </div>
    </div>
  );
}
