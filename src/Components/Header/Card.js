import React from "react";

export default function Card() {
  return (
    <>
      {/* Card Header */}
      <div className="flex justify-between items-center font-DanaMedium text-xs tracking-tighter ">
        <span className="text-gray-300">۱ مورد</span>
        <a href="#" className="flex items-center text-orange-300">
          مشاهده سبد خرید
          <svg className="h-4 w-4">
            <use href="#chevron-left"></use>
          </svg>
        </a>
      </div>
      {/* Card Body  */}
      <div className="pb-1 border-b border-b-gray-300 dark:border-b-white/10 divide-y divide-gray-100 dark:divide-white/10 child:py-5 h-[330px] overflow-y-auto">
 
        {/* card Item  */}
        <div className="flex gap-x-2.5">
          <img
            src="/images/products/p1.png"
            className="w-30 h-30"
            alt="product1"
          />
          <div className="flex flex-col justify-between">
            <h4 className="font-DanaMedium text-zinc-700 dark:text-white text-base line-clamp-2">
              قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
            </h4>
            <div>
              <span className="text-teal-600 dark:text-emerald-600 text-xs tracking-tighter">
                14.500 تومان تخفیف
              </span>
              <div className="text-zinc-700 dark:text-white font-DanaDemiBold">
                175000
                <span className="font-Dana text-sm"> تومان</span>
              </div>
            </div>
          </div>
        </div>
        {/* card Item  */}
        <div className="flex gap-x-2.5">
          <img
            src="/images/products/p2.png"
            className="w-30 h-30"
            alt="product1"
          />
          <div className="flex flex-col justify-between">
            <h4 className="font-DanaMedium text-zinc-700 dark:text-white text-base line-clamp-2">
              قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
            </h4>
            <div>
              <span className="text-teal-600 dark:text-emerald-600 text-xs tracking-tighter">
                14.500 تومان تخفیف
              </span>
              <div className="text-zinc-700 dark:text-white font-DanaDemiBold">
                175000
                <span className="font-Dana text-sm"> تومان</span>
              </div>
            </div>
          </div>
        </div>
        {/* card Item  */}
        <div className="flex gap-x-2.5">
          <img
            src="/images/products/p3.png"
            className="w-30 h-30"
            alt="product1"
          />
          <div className="flex flex-col justify-between">
            <h4 className="font-DanaMedium text-zinc-700 dark:text-white text-base line-clamp-2">
              قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
            </h4>
            <div>
              <span className="text-teal-600 dark:text-emerald-600 text-xs tracking-tighter">
                14.500 تومان تخفیف
              </span>
              <div className="text-zinc-700 dark:text-white font-DanaDemiBold">
                175000
                <span className="font-Dana text-sm"> تومان</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card Footer  */}
      <div className="flex justify-between mt-5">
        <div>
          <span className=" font-DanaMedium text-gray-300 text-xs tracking-tighter">
            مبلغ قابل پرداخت
          </span>
          <div className="text-zinc-700 dark:text-white font-DanaDemiBold">
            350000
            <span className="font-Dana text-sm"> تومان</span>
          </div>
        </div>
        <a href="#" className="flex justify-center items-center w-36 h-14 text-white bg-teal-600 dark:bg-emerald-500 hover:bg-teal-700 dark:hover:bg-emerald-600 transition-colors rounded-xl tracking-tightest">ثبت سفارش</a>
      </div>
    </>
  );
}
