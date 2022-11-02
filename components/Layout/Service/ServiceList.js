import React from "react";
import Button from "../../UI/Button";
import ServiceItem from "./ServiceItem";

const services = [
  {
    imageUrl: "/images/services/services_1.png",
    title: "Product design",
    text: `Producing, prototyping and testing sketches, high-fidelity
    wireframes and the final UI is a process that results in intuitive
    and impactful design that’s easy on the eyes.`,
  },
  {
    imageUrl: "/images/services/services_2.png",
    title: "Development",
    text: `By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until it's a fully-fledged digital solution.`,
  },
  {
    imageUrl: "/images/services/services_3.png",
    title: "Quality assurance",
    text: `Our QA engineering team makes your product bug-free, bulletproof and performance-driven through both automatic and manual testing.`,
  },
  {
    title: "Marketing & growth",
    text: `By understanding the mechanics of digital marketing, we make sure to put your product, at the right time, in front of the right people.`,
    imageUrl: "/images/services/services_4.png",
  },
];

function ServiceList() {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-1 px-[4.8rem] lg:gap-3 w-full">
      <h1 className="col-span-1 font-mont-bold text-[3.5rem]">Our services</h1>
      <div className="col-span-2 pl-[7rem] lg:pl-[0rem] grid gap-24 grid-cols-2 lg:grid-cols-1 ">
        {services.map(({ imageUrl, text, title }, index) => (
          <ServiceItem title={title} text={text} imageUrl={imageUrl} />
        ))}
        <div>
          <Button>See our services</Button>
        </div>
      </div>
    </div>
  );
}

export default ServiceList;
