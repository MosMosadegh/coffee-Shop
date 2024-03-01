import React, { useContext } from "react";
import productsContext from "../Context/ProductsContext";

export default function Card() {
  const contextData = useContext(productsContext);
  const removeMethod = (id) => {
    const updatedCart = contextData.userCart.filter(
      (product) => product.id !== id
    );
    // به روزرسانی کارت کاربر با استفاده از تابع مربوطه در contextData
    contextData.updateUserCart(updatedCart);
  };

  return (
    <>
      {/* Card Header */}
      <div className="flex justify-between items-center font-DanaMedium text-xs tracking-tighter ">
        <span className="text-gray-500 dark:text-gray-300">
          {contextData.userCart.length} مورد
        </span>
        <a href="#" className="flex items-center text-orange-300">
          مشاهده سبد خرید
          <svg className="h-4 w-4">
            <use href="#chevron-left"></use>
          </svg>
        </a>
      </div>
      {/* Card Body  */}
      <div className="pb-1 border-b border-b-gray-300 dark:border-b-white/10 divide-y divide-gray-100 dark:divide-white/10 child:py-5 h-[330px] overflow-y-auto">
        {/* card Item  */}
        {contextData.userCart.map((product) => (
          <div className="flex gap-x-2.5" key={product.id}>
            <img src={product.img} className="w-30 h-30" alt="Product Image" />
            <div className="flex flex-col justify-between">
              <h4 className="font-DanaMedium text-zinc-700 dark:text-white text-base line-clamp-2">
                {product.title}
              </h4>
              <div>
                <span className="text-teal-600 dark:text-emerald-600 text-xs tracking-tighter">
                  {(
                    ((product.offer * product.price) / 100) *
                    product.count
                  ).toLocaleString()}{" "}
                  تومان تخفیف
                </span>
                <div className="text-zinc-700 dark:text-white font-DanaDemiBold">
                  {Math.floor(
                    product.price * (1 - product.offer / 100) * product.count
                  ).toLocaleString()}
                  <span className="font-Dana text-sm"> تومان</span>
                  <span className="text-teal-600 dark:text-emerald-600 text-xs tracking-tighter px-2">
                    {" "}
                    تعداد: {product.count}
                  </span>
                  <button
                    onClick={() => removeMethod(product.id)}
                    className="text-xs tracking-tighter px-2 py-1 border md:border-2 border-orange-300 text-gray-400 bg-gray-100 dark:bg-zinc-800 hover:bg-teal-600 dark:hover:bg-emerald-500 hover:text-white rounded-lg cursor-pointer transition-all"
                  >
                    حذف
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Card Footer  */}
      <div className="flex justify-between mt-5">
        <div>
          <span className=" font-DanaMedium text-gray-500 dark:text-gray-300 text-xs tracking-tighter">
            مبلغ قابل پرداخت
          </span>
          <div className="text-zinc-700 dark:text-white font-DanaDemiBold">
            {contextData.userCart
              .reduce(
                (total, product) =>
                  total +
                  product.price * (1 - product.offer / 100) * product.count,
                0
              )
              .toLocaleString("fa-IR")}

            <span className="font-Dana text-sm"> تومان</span>
          </div>
        </div>
        <a
          href="#"
          className="flex justify-center items-center w-36 h-14 text-white bg-teal-600 dark:bg-emerald-500 hover:bg-teal-700 dark:hover:bg-emerald-600 transition-colors rounded-xl tracking-tightest"
        >
          ثبت سفارش
        </a>
      </div>
    </>
  );
}
