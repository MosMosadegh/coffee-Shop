import React from "react";

export default function FooterLink({title, href}) {
    const hrefAddress = `${href}`
  return (
    <div>
      <a
        href={hrefAddress}
        className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-orange-300 transition-colors"
      >
        <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
        {title}
      </a>
    </div>
  );
}
