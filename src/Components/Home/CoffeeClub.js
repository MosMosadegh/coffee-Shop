import React from "react";

export default function CoffeeClub() {
  return (
    <div className="flex items-center flex-wrap lg:flex-nowrap lg:gap-x-3 xl:gap-x-24 gap-y-9 py-8 lg:py-0 mb-8 md:mb-20 px-3 lg:px-2 xl:px-11 text-white bg-gradient-to-r from-emerald-500 to-emerald-600 lg:h-36 rounded-2xl ">
      <div className="flex items-center md:shrink-0 gap-x-3 lg:gap-x-2 xl:gap-x-6">
        <img
          src="images/club/diamond.png"
          alt="diamond"
          className="w-[87px] lg:w-[100px] xl:w-[110px]"
        />
        <div>
          <h4 className="font-MorabbaBold text-2xl md:text-5xl mb-2">
            کافی کلاب
          </h4>
          <p className="font-MorabbaLight text-lg md:text-2xl flex lg:flex-wrap">
            میدونستی میتونی با امتیاز هات قهوه بگیری ؟
          </p>
        </div>
      </div>
      <div className="flex justify-between md:justify-around w-full">
        <div className="flex gap-x-2 lg:gap-x-1 xl:gap-x-5">
          <div className="w-[72px] h-[72px] md:w-[98px] md:h-[98px] text-center text-emerald-600 bg-white py-1.5 md:pt-5 md:mb-1 rounded-2xl">
            <svg className="w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-1.5 mx-auto">
              <use href="#activity"></use>
            </svg>
            <span className="text-xs md:text-sm">چرخ و بخت</span>
          </div>
          <div className="w-[72px] h-[72px] md:w-[98px] md:h-[98px] text-center text-emerald-600 bg-white py-1.5 md:pt-5 md:mb-1 rounded-2xl">
            <svg className="w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-1.5 mx-auto">
              <use href="#discovery"></use>
            </svg>
            <span className="text-xs md:text-sm">ماموریت ها</span>
          </div>
          <div className="w-[72px] h-[72px] md:w-[98px] md:h-[98px] text-center text-emerald-600 bg-white py-1.5 md:pt-5 md:mb-1 rounded-2xl">
            <svg className="w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-1.5 mx-auto">
              <use href="#ticket-Start"></use>
            </svg>
            <span className="text-xs md:text-sm">جایزه ها</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="md:mb-1 font-DanaDemiBold text-2xl md:text-3xl">
            542
          </span>
          <span className="text-xs md:text-sm">امتیـــــــاز شما</span>
          <a
            href="#"
            className="flex items-center justify-center mt-1 md:mt-2 w-[90px] md:w-[110px] h-[26px] md:h-8 bg-gradient-to-r from-orange-200 to-orange-300 font-DanaMedium text-xs md:text-sm rounded-full"
          >
            دریافت جایزه
            <svg className="rotate-90 w-5 h-5 md:w-6 md:h-6">
              <use href="#mini-chevron-down"></use>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
