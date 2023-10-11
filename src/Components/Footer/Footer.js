import React from "react";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <div className="relative bg-zinc-700 py-8 md:pb-11 md:pt-[62px]">
      {/* //* Curve */}
      <svg className="absolute top-0 right-0 left-0 mx-auto hidden md:inline-block text-gray-100 dark:text-zinc-800 w-[100px] h-[22px]">
        <use href="#curve-footer"></use>
      </svg>

      {/* //* arrow up  */}
      <div className="absolute top-0 right-0 left-0 mx-auto hidden md:flex justify-center items-center w-[30px] h-[30px] border-2 border-orange-300 rounded-full -translate-y-2/4">
        <svg className="w-5 h-5 text-zinc-700 dark:text-white rotate-180 ">
          <use href="#mini-chevron-down"></use>
        </svg>
      </div>

      <div className="w-[94%] lg:w-[90%] px-4 md:px-0 mx-auto text-gray-300">
        <div className="flex flex-wrap justify-between">
          <div>
            <div class="flex gap-x-5 mb-6 md:mb-4.5">
              <svg class="h-[54px] w-[57px]">
                <use href="#logo"></use>
              </svg>
              <svg class="h-[54px] w-[138px]">
                <use href="#logo-type"></use>
              </svg>
            </div>
            <p className="xl:max-w-[606px] text-lg md:text-xl/[48px]">
              ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول،
              خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع
              فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و
              منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با
              اشتیاق می‌کوشیم.
            </p>
          </div>
          <div className="mt-10 md:mt-[26px]">
            <h4 className="font-DanaDemiBold text-2xl mb-6 md:mb-7 text-white">
              دسترسی سریع
            </h4>
            <div className="grid grid-cols-2 gap-y-2.5 md:gap-y-5 gap-x-40 md:gap-x-16">
              <FooterLink title="حریم خصوصی" href="#" />
              <FooterLink title="عودت کالا" href="#" />
              <FooterLink title="شرایط استفاده" href="#" />
              <FooterLink title="ثبت سفارش" href="#" />
              <FooterLink title="پرسش های متداول" href="#" />
              <FooterLink title="فرصت های شغلی" href="#" />
              <FooterLink title="ضمانت نامه ها" href="#" />
              <FooterLink title="ارتباط با ما" href="#" />
            </div>
          </div>
          <div className="mt-10 md:mt-[26px]">
            <h4 className="font-DanaDemiBold text-2xl mb-6 md:mb-7 text-white">
              در تماس باشیم
            </h4>
            <div className="md:text-xl mb-6 md:mb-10">
              <span className="flex items-center gap-x-2 md:gap-x-3 mb-4 md:mb-5">
                <svg class="shrink-0 w-5 h-5 md:w-6 md:h-6">
                  <use href="#map"></use>
                </svg>
                بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳
              </span>
              <div className="flex flex-wrap gap-x-5 gap-y-4 font-DanaMedium">
                <a
                  href="mailto:info@Coffee.com"
                  className="flex items-center gap-x-2 md:gap-x-3 text-orange-300"
                >
                  <svg class="w-5 h-5 md:w-6 md:h-6">
                    <use href="#email"></use>
                  </svg>
                  info@Coffee.com
                </a>
                <div className="flex items-center gap-x-2 md:gap-x-3">
                  <svg class="w-5 h-5 md:w-6 md:h-6">
                    <use href="#phone1"></use>
                  </svg>
                  <span>09127595049</span>
                  <span>02177777777</span>
                </div>
              </div>
            </div>
            <div className="flex gap-x-1.5 md:gap-x-6 ltr-text font-DanaMedium md:text-xl">
              <a
                href="#"
                className="flex-center flex-grow gap-x-2 h-12 text-zinc-700 bg-gradient-to-r from-orange-200 to-orange-300 rounded-xl"
              >
                @golden_coffee
                <svg class="w-[26px] h-[26px] md:w-[38px] md:h-[38px]">
                  <use href="#telegram"></use>
                </svg>
              </a>
              <a
                href="#"
                className="flex-center flex-grow gap-x-2 h-12 border border-orange-200 text-orange-200 rounded-xl"
              >
                @golden_coffee
                <svg class="w-[26px] h-[26px] md:w-[38px] md:h-[38px]">
                  <use href="#instagram"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-x-4 font-DanaMedium text-xs/5 md:text-base border-t border-t-white/10 pt-10 md:pt-11 mt-10 md:mt-11">
          <div className="flex items-center gap-x-2.5">
          <div className="flex-center shrink-0 w-[30px] h-[30px] border border-white/10 rounded-full">
            <div className="flex-center w-5 h-5 border border-white/20 rounded-full">
              <div className=" w-2.5 h-2.5 bg-gradient-to-r from-orange-200 to-orange-300 rounded-full">
              </div>
            </div>
          </div>
          <p>
            تمام حقوق این رابط کاربری متعلق به{" "}
            <span className="text-orange-300">سبزلرن</span> میباشد و دانشجوی این
            دوره اجازه استفاده آن را در مصارف شخصی و تجاری ندارد.
          </p>
          </div>
          <span className="ltr-text mr-auto">Copyright © 2023 Golden Coffee. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}
