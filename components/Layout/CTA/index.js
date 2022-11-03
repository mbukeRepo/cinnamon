import React from "react";
import Button from "../../UI/Button";
import Image from "next/image";

export default function CTA() {
  return (
    <div className="bg-cinn-bg-color relative">
      <div className="container  mx-auto  py-24 flex flex-col items-center text-center gap-16">
        <h4 className="font-mont-bold text-5xl w-3/5 leading-[4rem]">
          <span className="block md:hidden">Have a project in mind?</span>
          <br className="block md:hidden" /> Let's work together.
        </h4>
        <div>
          <Button>Contact Us</Button>
        </div>
      </div>
      <div className="absolute md:w-[10rem] -bottom-2 w-[27rem] left-0">
        <Image src="/images/cta.png" width={750} height={478} alt="agility" />
      </div>
    </div>
  );
}
