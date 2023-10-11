import React from "react";

export default function ServicesBox({ icon, iconDark, title, desc }) {
  const iconHref = `#${icon}`;
  const iconDarkHref = `#${iconDark}`;
  return (
    <div className="flex items-center flex-col sm:flex-row gap-x-4 gap-y-5 text-center md:text-right">
      <div>
      <svg className="dark:hidden w-30 h-20">
        <use href={iconHref}></use>
      </svg>
      <svg className="hidden dark:inline-block w-30 h-20">
        <use href={iconDarkHref}></use>
      </svg>
      </div>
      <div>
        <h5 className="font-DanaDemiBold text-sm sm:text-lg/6 mb-1 md:mb-3.5">
          {title}
        </h5>
        <span className="text-xs sm:text-sm/6">{desc}</span>
      </div>
    </div>
  );
}
