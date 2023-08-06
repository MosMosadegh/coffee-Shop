import React, { useState } from "react";
import NavMobile from "./NavMobile";
import CardMobile from "./CardMobile";

export default function HeaderMobile() {
  const [isShowNavMobile, setIsShowNavMobile] = useState(false);
  const [isShowCardMobile, setIsShowCardMobile] = useState(false);

  return (
    <div>
      <div className="flex md:hidden justify-between items-center h-16 px-4 bg-white dark:bg-zinc-700">
        {/* //* Nav Icon  */}
        <div>
          <svg
            className="h-8 w-8 text-zinc-700 dark:text-white "
            onClick={() => {
              setIsShowNavMobile(true);
            }}
          >
            <use href="#bars-3"></use>
          </svg>
        </div>
        <NavMobile
          isShowNavMobile={isShowNavMobile}
          setIsShowNavMobile={setIsShowNavMobile}
        />
        {/* //* Logo Type  */}
        <div>
          <svg className="h-10 w-[100px] text-orange-300">
            <use href="#logo-type"></use>
          </svg>
        </div>
        {/* //* Card Icon  */}
        <div>
          <svg
            className="h-8 w-8 text-zinc-700 dark:text-white"
            onClick={() => {
              setIsShowCardMobile(true);
            }}
          >
            <use href="#shopping-cart"></use>
          </svg>
        </div>
        <CardMobile
          isShowCardMobile={isShowCardMobile}
          setIsShowCardMobile={setIsShowCardMobile}
        />
      </div>
      
      {/* //* Overlay  */}
      <div
        className={`overlay md:hidden fixed inset-0 w-full h-full bg-black/40 z-10 transition-all ${
          isShowNavMobile || isShowCardMobile ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => {
          setIsShowNavMobile(false);
          setIsShowCardMobile(false);
        }}
      ></div>
    </div>
  );
}
