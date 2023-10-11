import React from "react";
import Products from "../../Components/Product/Products";
import TypeWriter from "../../Components/TypeWriter/TypeWriter";

export default function Shop() {
  return (
    <div className="container">
      <div className="w-[100%] lg:w-[95%] left-0 right-0 mx-auto my-10 md:mt-40">
      <TypeWriter/>
        <Products />
      </div>
    </div>
  );
}
