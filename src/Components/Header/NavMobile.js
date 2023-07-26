import React from "react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";


export default function NavMobile() {
  return (
    <div className="fixed top-0 bottom-0 right-0 w-64 min-h-screen py-3 px-4 bg-white dark:bg-zinc-700 z-20">
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
        <svg className="h-5 w-5 text-zinc-600 dark:text-white">
          <use href="#x-mark"></use>
        </svg>
      </div>

      {/* //* NAVBAR */}
      <div>
        <ul className="space-y-6 child:px-2.5 text-zinc-600 dark:text-white">
          <li className="flex items-center h-10 pr-0 bg-orange-200/20 text-orange-300 rounded-md ">
            <a href="#" className="inline-flex items-center gap-x-2 ">
              <svg className="h-5 w-5">
                <use href="#home"></use>
              </svg>
              صفحه اصلی
            </a>
          </li>
          <li className="flex justify-between items-center">
            <a href="#" className="inline-flex items-center gap-x-2 ">
              <svg className="h-5 w-5">
                <use href="#shopping-cart"></use>
              </svg>
              فروشگاه
            </a>
            <span>
            <svg className="h-4 w-4">
                <use href="#chevron-down"></use>
              </svg>
            </span>
          </li>
          <li>
            <a href="#" className="inline-flex items-center gap-x-2 ">
              <svg className="h-5 w-5">
                <use href="#chat-bubble"></use>
              </svg>
              دیکشنری
            </a>
          </li>
          <li>
            <a href="#" className="inline-flex items-center gap-x-2 ">
              <svg className="h-5 w-5">
                <use href="#briefcase"></use>
              </svg>
              درباره ما
            </a>
          </li>
          <li>
            <a href="#" className="inline-flex items-center gap-x-2 ">
              <svg className="h-5 w-5">
                <use href="#document-text"></use>
              </svg>
              بلاگ
            </a>
          </li>
          <li>
            <a href="#" className="inline-flex items-center gap-x-2 ">
              <svg className="h-5 w-5">
                <use href="#phone"></use>
              </svg>
              تماس با ما
            </a>
          </li>
        </ul>
      </div>

      {/* //*NAV Footer  */}
      <div className="space-y-6 pt-8 px-2.5 mt-8 border-t border-t-gray-100 dark:border-t-white/10 text-orange-300">
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
