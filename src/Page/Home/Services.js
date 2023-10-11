import React from "react";
import ServicesBox from "../../Components/ServicesBox/ServicesBox";

export default function Services() {
  return (
    <div className="services mb-12 md:mb-36">
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-y-11 text-zinc-700 dark:text-white">
        <ServicesBox
        icon='support'
        iconDark='support-dark'
        title='پشتیبانی شبانه روزی'
        desc='7 روز هفته ، 24 ساعته'
        />
        <ServicesBox
        icon='express-delivery'
        iconDark='express-delivery-dark'
        title='امکان تحویل اکسپرس'
        desc='ارسال بسته با سرعت باد'
        />
        <ServicesBox
        icon='coffee'
        iconDark='coffee-dark'
        title='رست تخصصی'
        desc='تازه برشته شده و با کیفیت'
        />
        <ServicesBox
        icon='pitcher'
        iconDark='pitcher-dark'
        title='اکسسوری قهوه'
        desc='وسایل و ادوات دم آوری'
        />
      </div>
    </div>
  );
}
