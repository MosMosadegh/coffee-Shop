import React from "react";
import ProductCard from "./ProductCard";
import CategoryBanner from "./CategoryBanner";
import ProductCategory from "./ProductCategory";
import BestSelling from "./BestSelling";
import CoffeeClub from "./CoffeeClub";
import Blog from "../Blog/Blog";
import BlogCard from "../Blog/BlogCard";

export default function Products() {
  return (
    <div className="products pt-8 lg:pt-48">
      <div className="container">
        <div className="w-[100%] lg:w-[95%] left-0 right-0 mx-auto">
          {/* //* products Head  */}
          <div className="flex justify-between items-end mb-5 md:mb-12">
            <div>
              <h3 className="section-title">جدیدترین محصولات</h3>
              <span className="section-subtitle">فرآوری شده از دانه قهوه</span>
            </div>
            <a href="#" className="section-link">
              <span className="hidden md:inline-block">مشاهده همه محصولات</span>
              <span className="inline-block md:hidden">مشاهده همه</span>
              <svg className="w-5 h-5">
                <use href="#chevron-left"></use>
              </svg>
            </a>
          </div>
          {/* //* products Body */}

          <ProductCard />

          <CategoryBanner />
          <ProductCategory />
          <BestSelling />
          <CoffeeClub />
          <div className="flex justify-between items-end mb-5 md:mb-12">
            <div>
              <h3 className="section-title">مطالب خواندنی</h3>
            </div>
            <a href="#" className="section-link">
              <span className="hidden md:inline-block">مشاهده همه مطالب</span>
              <span className="inline-block md:hidden">مشاهده همه</span>
              <svg className="w-5 h-5">
                <use href="#chevron-left"></use>
              </svg>
            </a>
          </div>
          <BlogCard />
        </div>
      </div>
    </div>
  );
}
