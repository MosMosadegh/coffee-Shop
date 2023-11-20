import React from "react";
import BlogCard from "./BlogCard";
import TypeWriter from "../../Components/TypeWriter/TypeWriter";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

export default function Blogs() {

  return (
    <div className="container">
      <div className="w-[100%] lg:w-[95%] h-auto left-0 right-0 mx-auto mt-10 md:mt-40">
      <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "" },
          {
            id: 2,
            title: "مقاله ها",
            to: "blog",
          },
        ]}
      />
        <TypeWriter />
        <BlogCard />
      </div>
    </div>
  );
}
