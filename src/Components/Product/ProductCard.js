import React, { useContext } from "react";
import productsContext from "../Context/ProductsContext";

export default function ProductCard() {
  const contextData = useContext(productsContext);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 child:bg-white child:dark:bg-zinc-700 child:rounded-2xl child:shadow-normal">
      {contextData.allProduct.map((productItems) => (
        <div key={productItems.id} className="p-2 md:p-5">
          <div className="relative mb-2 md:mb-5">
            <img
              src={productItems.img}
              className="w-32 md:w-auto mx-auto"
              loading="lazy"
              alt="P1"
            />
            {productItems.offer !== 0 && (
              <span className="absolute top-1.5 right-1.5 block h-5 md:h-[30px] text-xs/[24px] md:text-base/[34px]  font-DanaDemiBold text-white dark:text-zinc-700 px-2.5 md:px-3.5 rounded-full bg-orange-300">
                {productItems.offer}%
              </span>
            )}
          </div>
          <h5 className="font-DanaMedium text-sm md:text-xl h-10 md:h-14 text-zinc-700 dark:text-white line-clamp-2">
            {productItems.title}
          </h5>
          {productItems.count !== 0 ? (
            <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5 ">
              <div className="flex items-center gap-x-1 text-teal-600 dark:text-emerald-500">
                {/* //* price  */}
                <span className="font-DanaDemiBold text-base md:text-xl">
                  {Math.floor(
                    productItems.price * (1 - productItems.offer / 100)
                  ).toLocaleString()}
                </span>
                <span className="text-xs md:text-sm tracking-tighter">
                  تومان
                </span>
              </div>
              {productItems.offer !== 0 && (
                <div className="offer flex items-center gap-x-1">
                  <span className="text-xs md:text-xl">
                    {productItems.price.toLocaleString()}
                  </span>
                  <span className="hidden xl:inline text-sm tracking-tighter">
                    تومان
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center">
              <span className="font-DanaDemiBold mt-1.5 md:mt-2.5 text-base md:text-xl text-red-500">
                موجود نیست
              </span>
            </div>
          )}
          <div className="flex items-center justify-between mt-2.5">
            <div className="flex items-center gap-x-2.5 md:gap-x-3">
              <span className="flex-center w-[26px] h-[26px] md:w-9 md:h-9 text-gray-400 bg-gray-100 dark:bg-zinc-800 hover:bg-teal-600 dark:hover:bg-emerald-500 hover:text-white rounded-full cursor-pointer transition-all">
                <svg className="w-4 h-4 md:w-[22px] md:h-[22px]">
                  <use href="#shopping-cart"></use>
                </svg>
              </span>
              <span className="text-gray-400 hover:text-teal-600 dark:hover:text-emerald-500 rounded-full cursor-pointer transition-all">
                <svg className="w-4 h-4 md:w-6 md:h-6">
                  <use href="#arrows-right-left"></use>
                </svg>
              </span>
            </div>

            {/* //TODO: 5-stars  */}
            <div className="flex text-yellow-400">
              <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400">
                <use href="#star"></use>
              </svg>
              <svg className="w-4 h-4 md:w-6 md:h-6">
                <use href="#star"></use>
              </svg>
              <svg className="w-4 h-4 md:w-6 md:h-6">
                <use href="#star"></use>
              </svg>
              <svg className="w-4 h-4 md:w-6 md:h-6">
                <use href="#star"></use>
              </svg>
              <svg className="w-4 h-4 md:w-6 md:h-6">
                <use href="#star"></use>
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
