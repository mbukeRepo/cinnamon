import React from "react";
import Image from "next/image";

export default function BlogItem({ labels, imageUrl, description, title }) {
  return (
    <div key={title} className="flex group basis-96 flex-grow flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="w-[22rem]">
          <Image src={imageUrl} width={352} height={216} alt={title} />
        </div>
        <p className="text-xs font-mont-bold group-hover:text-primary">
          {title}
        </p>
      </div>
      <ul className="flex text-secondary gap-6">
        {labels.map((label, index) => (
          <li
            className={`relative md:text-clip after:${
              index === labels.length - 1 ? "hidden" : "flex"
            } after:absolute after:-right-3 after:rounded-full after:translate-x-1/2 after:bottom-1/3 after:h-[0.4rem] after:w-[0.4rem] after:bg-yellow-400`}
            key={index}
          >
            {label}
          </li>
        ))}
      </ul>
      <h3 className="pr-6 group-hover:text-primary text-2xl font-mont-bold">
        {description}
      </h3>
    </div>
  );
}
