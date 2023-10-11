import React from "react";

export default function CategoryBanner() {
  return (
    <div className="my-8 mb-10 md:my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white ">
        <a href="#" className="category-banner__item1 h-[142px] lg:h-[248px] flex flex-col justify-center pr-7 lg:pr-12 rounded-2xl">
          <span className="font-DanaDemiBold text-2xl/6 lg:text-4xl/6  mb-4 md:mb-7">انواع قهوه</span>
          <span className="md:font-DanaMedium lg:text-xl/6">ترکیبی و تک خاستگاه</span>
        </a>
        <a href="#" className="category-banner__item2 h-[142px] lg:h-[248px] flex flex-col justify-center pr-7 lg:pr-12 rounded-2xl">
          <span className="font-DanaDemiBold text-2xl/6 lg:text-4xl/6  mb-4 md:mb-7">پودر های فوری</span>
          <span className="md:font-DanaMedium lg:text-xl/6">نسکافه ، هات چاکلت ، ماسالا</span>
        </a>
      </div>
    </div>
  );
}
