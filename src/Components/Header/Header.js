import React from "react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import Card from "./Card";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  return (
    <>
      <header className="fixed top-9 left-0 right-0 hidden md:flex items-center w-[98%] lg:w-[90%] h-24 px-5 lg:px-10 py-5 mx-auto bg-black/50 rounded-3xl backdrop-blur-[6px]">
        <div className="flex justify-between w-full items-center">
          {/* //* Logo & Menu */}
          <nav className="flex items-center gap-x-5 lg:gap-x-9 h-14">
            {/* //* Logo  */}
            <div className="flex-shrink-0">
              <img src="images/app-logo.png" alt="Golden Coffee" />
            </div>
            {/* //* Menu  */}
            <ul className="flex gap-x-5 lg:gap-x-9 h-full text-xl text-gray-300 tracking-tightest child:leading-[56px]">
              <li className="font-DanaMedium text-orange-200">
                <a href="#">صفحه اصلی</a>
              </li>
              <li className="relative group">
                <a
                  href="#"
                  className="group-hover:text-orange-300 transition-colors"
                >
                  فروشگاه
                </a>
                <div className="absolute top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible w-52 p-6 space-y-4 text-zinc-700 dark:text-white text-base bg-white dark:bg-zinc-700 rounded-2xl border-t-[3px] border-t-orange-300 tracking-normal shadow-normal  child:inline-block transition-all delay-75 child-hover:text-orange-300 ">
                  <a href="#">قهوه ویژه</a>
                  <a href="#">ویژه در سطح جهانی</a>
                  <a href="#">قهوه درجه یک</a>
                  <a href="#">ترکیبات تجاری</a>
                  <a href="#">کپسول قهوه</a>
                  <a href="#">قهوه زینو برزیلی</a>
                </div>
              </li>
              <li>
                <a href="#">دیکشنری</a>
              </li>
              <li>
                <a href="#">بلاگ</a>
              </li>
              <li>
                <a href="#">درباره ما</a>
              </li>
              <li>
                <a href="#">تماس با ما</a>
              </li>
            </ul>
          </nav>
          {/* //* Card & Theme Toggle & Login Link  */}
          <div
            className="flex items-center text-xl gap-x-3
         lg:gap-x-5 xl:gap-x-10 text-orange-200"
          >
            <div className="flex gap-x-3 lg:gap-x-5">
              <div className="relative group">
                <div className="py-3 cursor-pointer">
                  <svg className="h-8 w-8">
                    <use href="#shopping-cart"></use>
                  </svg>

                  {/* //* Card Box   */}
                  <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible w-[400px] p-5 bg-white dark:bg-zinc-700  border-t-[3px] border-t-orange-300 shadow-normal rounded-2xl transition-all delay-75">
                    <Card />
                  </div>
                </div>
                <div></div>
              </div>
                {/* //* Theme Toggle  */}
              <div className="py-3 text-xl text-orange-200">
                <Flowbite>
                  <DarkThemeToggle className="text-orange-200" />
                </Flowbite>
                {/* <svg className="h-8 w-8 inline-block dark:hidden">
                <use href="#moon"></use>
              </svg>
              <svg className="h-8 w-8 hidden dark:inline-block">
                <use href="#sun"></use>
              </svg> */}
              </div>
            </div>
            <span className="block w-px h-14 bg-white/20"></span>

            {/* //* Login Link  */}
            <a
              href="#"
              className="flex items-center gap-x-2.5 tracking-tightest"
            >
              <svg className="h-8 w-8 rotate-180">
                <use href="#arrow-left-on-rectangle"></use>
              </svg>
              <span className="hidden xl:inline-block">ورود | ثبت‌نام</span>
            </a>
          </div>
        </div>
      </header>
      <HeaderMobile/>
      <div className="overlay md:hidden fixed inset-0 w-full h-full bg-black/40 z-10"></div>
    </>
  );
}