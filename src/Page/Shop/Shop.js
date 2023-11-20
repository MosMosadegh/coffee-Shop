import React from "react";
import Products from "../../Components/Product/Products";
import TypeWriter from "../../Components/TypeWriter/TypeWriter";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

export default function Shop() {
  return (
    <div className="container">
      <div className="w-[100%] lg:w-[95%] left-0 right-0 mx-auto my-10 md:mt-40">
      <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "" },
          {
            id: 2,
            title: "فروشگاه",
            to: "shop",
          },
        ]}
      />
      <TypeWriter/>
        <Products />
      </div>
    </div>
  );
}
