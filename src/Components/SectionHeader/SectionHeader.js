import React from "react";
import { Link } from "react-router-dom";

export default function SectionHeader({ title, decs, btnTitle, btnHref }) {
  return (
    <div className="flex justify-between items-end mb-5 md:mb-12 pt-8 lg:pt-48">
      <div>
        <h3 className="section-title">{title}</h3>
        {decs ? <span className="section-subtitle">{decs}</span> : null}
      </div>
      {btnTitle ? (
        <Link to={btnHref} className="section-link">
          <span className="hidden md:inline-block">{btnTitle}</span>
          <span className="inline-block md:hidden">مشاهده همه</span>
          <svg className="w-5 h-5">
            <use href="#chevron-left"></use>
          </svg>
        </Link>
      ) : null}
    </div>
  );
}
