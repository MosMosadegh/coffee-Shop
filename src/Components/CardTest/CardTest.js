import React from "react";

export default function CardTest() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-[382px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md">
        <img src="images/image-1.jpg" alt="pic" />
        <div className="p-5 space-y-3">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            <a href="#">Noteworthy technology acquisitions 2021</a>
          </h2>
          <p className="text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            className="inline-flex gap-x-1.5 rounded-lg p-2 text-sm items-center bg-blue-700 hover:bg-blue-800 transition-colors text-white"
          >
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
