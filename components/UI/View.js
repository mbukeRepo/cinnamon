import React from "react";

export default function View({ children }) {
  return (
    <div className="flex text-primary gap-3 items-center ">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      <h3 className="relative after:absolute after:bottom-0 after:w-full after:h-[0.13rem] font-mont-bold text-lg after:bg-primary after:left-0">
        {children}
      </h3>
    </div>
  );
}
