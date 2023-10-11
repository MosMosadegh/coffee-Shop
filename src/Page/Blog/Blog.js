import React from "react";
import BlogCard from "./BlogCard";
import TypeWriter from "../../Components/TypeWriter/TypeWriter";


export default function Blogs() {
  return (
    <div className="container">
      <div className="w-[100%] lg:w-[95%] h-96 left-0 right-0 mx-auto mt-10 md:mt-40">
      <TypeWriter/>
      <BlogCard/>
      </div>
    </div>
  );
}
