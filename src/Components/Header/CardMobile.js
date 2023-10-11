import React from "react";

export default function CardMobile({ isShowCardMobile, setIsShowCardMobile }) {
  return (
    <div
      className={`fixed flex flex-col top-0 bottom-0 w-64 overflow-y-auto pt-5 px-4 bg-white dark:bg-zinc-700 z-20 transition-all ${
        isShowCardMobile ? "left-0" : "-left-64"
      }`}
    >
      {/* Card Header */}
      <div className="flex justify-between items-center pb-5 mb-5 border-b border-b-gray-300 dark:border-b-white/10 ">
        <svg
          className="h-5 w-5 text-zinc-600 dark:text-white"
          onClick={() => {
            setIsShowCardMobile(false);
          }}
        >
          <use href="#x-mark"></use>
        </svg>
        <span className="text-zinc-700 dark:text-white font-Dana">
          سبد خرید
        </span>
      </div>
      {/* Card Body  */}
      <div className="child:pb-5 child:mb-5">
        {/* card Item  */}
        <div className="flex gap-x-1 border-b border-b-gray-100 dark:border-b-white/10">
          <img
            src="/images/products/p1.png"
            className="w-[90px] h-[90px]"
            alt="product1"
          />
          <div className="flex flex-col justify-between gap-y-1.5">
            <h4 className="font-DanaMedium text-zinc-700 dark:text-white text-sm line-clamp-2">
              قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
            </h4>
            <div>
              <span className="text-teal-600 dark:text-emerald-600 font-DanaMedium text-xs tracking-tighter">
                14.500 تومان تخفیف
              </span>
              <div className="text-zinc-700 dark:text-white font-DanaDemiBold">
                175000
                <span className="font-Dana text-xs"> تومان</span>
              </div>
            </div>
          </div>
        </div>
        {/* card Item  */}
        <div className="flex gap-x-1 border-b border-b-gray-100 dark:border-b-white/10">
          <img
            src="/images/products/p2.png"
            className="w-[90px] h-[90px]"
            alt="product2"
          />
          <div className="flex flex-col justify-between gap-y-1.5">
            <h4 className="font-DanaMedium text-zinc-700 dark:text-white text-sm line-clamp-2">
              قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
            </h4>
            <div>
              <span className="text-teal-600 dark:text-emerald-600 font-DanaMedium text-xs tracking-tighter">
                14.500 تومان تخفیف
              </span>
              <div className="text-zinc-700 dark:text-white font-DanaDemiBold">
                175000
                <span className="font-Dana text-xs"> تومان</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Card Footer  */}
      <div className="flex items-end mb-8 gap-x-4 mt-auto">
          <a
            href="#"
            className="flex justify-center items-center w-28 h-11 text-white bg-teal-600 dark:bg-emerald-500  rounded-xl"
          >
            ثبت سفارش
          </a>
          <div>
            <span className=" font-DanaMedium text-gray-300 text-xs tracking-tighter">
              مبلغ قابل پرداخت
            </span>
            <div className="text-zinc-700 dark:text-white font-DanaDemiBold">
              350000<span className="font-Dana text-xs"> تومان</span>
            </div>
          </div>
        </div>
      </div>
  );
}
