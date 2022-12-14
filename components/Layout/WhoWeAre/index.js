import React from "react";
import Button from "../../UI/Button";
import Image from "next/image";
export default function WhoWeAre() {
  const services = [
    "Product design",
    "Project management",
    "Web development",
    "Human resources",
    "Mobile development",
    "Sales",
    "Quality assurance",
    "Fluffy friends",
    "Marketing",
  ];
  return (
    <div className="relative bg-cinn-bg-color">
      <div className="container py-36 px-[4.8rem] md:px-[2rem] mx-auto flex flex-col gap-16 ">
        <div className="flex flex-col gap-12">
          <h3 className="font-mont-bold text-6xl">Who we are</h3>
          <p className="text-secondary leading-7">
            Meet our international teams made up of 86
            <br className="block md:hidden" /> innovators, branched into 8
            departments, that
            <br className="block md:hidden" /> influence the market throughout
            20 different countries.
          </p>
        </div>
        <ul className="grid md:hidden grid-cols-2 gap-4 w-4/5">
          {services.map((service, index) => (
            <li className="font-mont-bold text-2xl" key={index}>
              {service}
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Image
            src="/images/who-we-are.png"
            width={340}
            height={540}
            alt="who we are"
          />
        </div>
        <div>
          <Button>Read About Us</Button>
        </div>
      </div>
      <div className="absolute block md:hidden right-0 top-1/2 -translate-y-1/2">
        <Image
          src="/images/who-we-are.png"
          width={340}
          height={540}
          alt="who we are"
        />
      </div>
    </div>
  );
}
