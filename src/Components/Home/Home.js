import React from "react";
import Products from "./Products";
import CoffeeClub from "./CoffeeClub";

export default function Home() {
  return (
    <>
    <div className=" relative h-[200px] xs:h-auto xs:aspect-[2/1] md:aspect-auto bg-home-mobile md:bg-home-desktop bg-no-repeat bg-cover bg-[center_top]">
      <div className="container md:pl-20 pt-8 md:pt-16 relative overflow-y-hidden md:min-h-screen flex items-center justify-end ">
        <div className=" text-white">
          <h2 className="font-MorabbaBold text-2xl md:text-4xl/[62px] lg:text-6xl/[62px] mb-0.5 md:mb-1 lg:mb-2">
            قهوه عربیکا تانزانیا
          </h2>
          <span className="font-MorabbaLight text-xl md:text-3xl lg:text-5xl/[64px]">
            یک فنجان بالانس !
          </span>
          <span className="block w-[100px] h-px md:h-0.5 bg-orange-300 my-3 md:my-4 lg:my-8"></span>
          <p className="max-w-[201px] md:max-w-[300px] lg:max-w-[460px] text-xs md:text-xl lg:text-2xl">
            قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است
            که در نواحی مختلف کمربند قهوه کشت میشود.
          </p>
        </div>
        {/* //* 3-ARC  */}
        <div className="circle circle--lg circle--main">
          <div className="circle circle--md">
            <div className="circle circle--sm"></div>
          </div>
        </div>
      </div>
      {/* //* Curve */}
      <svg className="absolute bottom-0 right-0 left-0 mx-auto hidden md:inline-block text-gray-100 dark:text-zinc-800 w-[100px] h-[22px]">
        <use href="#curve"></use>
      </svg>

      {/* //* arrow down  */}
      <div className="absolute bottom-0 right-0 left-0 mx-auto hidden md:flex justify-center items-center w-[30px] h-[30px] border-2 border-orange-300 rounded-full translate-y-2/4">
        <svg className="w-5 h-5 text-zinc-700 dark:text-white ">
          <use href="#mini-chevron-down"></use>
        </svg>
      </div>
    </div>
    <Products/>
    </>
  );
}
