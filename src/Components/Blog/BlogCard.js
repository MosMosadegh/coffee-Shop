import React, { useContext } from "react";
import productsContext from "../Context/ProductsContext";

export default function BlogCard() {
  const contextData = useContext(productsContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 mb-8 md:mb-28">
      {contextData.allBlogs.map((blogItems) => (
        <div key={blogItems.id}>
          <div className="group flex gap-x-2.5 sm:block p-2.5 md:pb-2 bg-white dark:bg-zinc-700 rounded-2xl shadow-normal">
            <div className="relative w-[130px] h-[130px] shrink-0 sm:w-auto sm:h-auto sm:mb-4 rounded-2xl rounded-bl-4xl overflow-hidden">
              <img
                src={blogItems.img}
                className="h-full sm:h-auto object-cover"
                alt={blogItems.id}
              />
              <div className="absolute inset-0 w-full h-full hidden md:flex-center invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-gradient-to-r from-orange-200/80 to-orange-300/80 transition-all delay-75">
                <svg className="w-[138px] h-[54px] text-amber-900">
                  <use href="#logo-type"></use>
                </svg>
              </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row items-start justify-between">
              <a
                href="#"
                className="font-DanaMedium md:font-Dana ml-1.5 sm:ml-1 mt-2.5 sm:mt-0 line-clamp-2 max-w-[193px] text-sm/7 md:text-base lg:text-lg text-zinc-700 dark:text-white"
              >
                {blogItems.title}
              </a>
              <div className="hidden sm:flex gap-5">
                <span className="hidden lg:block w-px h-[61px] bg-gray-200 dark:bg-white/10"></span>
                <div className="flex flex-col ml-[12px] lg:ml-[18px] -mt-1 text-left text-sm text-teal-600 dark:text-emerald-500">
                  <span className="font-DanaDemiBold md:text-xl lg:text-2xl">
                    {blogItems.date}
                  </span>
                  <span>{blogItems.month}</span>
                  <span>{blogItems.year}</span>
                </div>
              </div>
              <div className="flex items-end justify-between w-full pb-1.5 sm:hidden border-t border-t-gray-200 dark:border-t-white/10 pt-[18px]">
                <span className="text-teal-600 dark:text-emerald-500 text-xs">
                {blogItems.date}{blogItems.month}{blogItems.year}
                </span>
                <a
                  href="#"
                  className="flex items-center gap-x-1 ml-1.5 font-DanaMedium text-xs h-5 rounded-md pr-2.5 pl-2 bg-orange-200/20 text-orange-300"
                >
                  مطالعه
                  <svg className="w-3.5 h-3.5">
                    <use href="#arrow-left"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
