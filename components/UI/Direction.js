import React from "react";
import Image from "next/image";
export default function Direction({ className }) {
  return (
    <div className={`flex ${className}`}>
      <div className="w-[4rem] hover:-translate-y-4 transition-all duration-300">
        <Image
          src="/images/arrowl48x27.png"
          width={48}
          height={27}
          alt="arrow right"
        />
      </div>
      <div className="w-[4rem] hover:-translate-y-4 transition-all duration-300">
        <Image
          src="/images/arrowr48x27.png"
          width={48}
          height={27}
          alt="arrow right"
          className="w-[4rem]"
        />
      </div>
    </div>
  );
}
