import React from "react";
import Button from "../../UI/Button";
import Image from "next/image";

export default function index() {
  return (
    <div className="bg-cinn-bg-color relative px-[5rem] md:px-[2rem] 2xl:px-[12rem] overflow-hidden">
      <div className="py-36 max-w-[1400px] mx-auto  grid grid-cols-2 md:gap-12 md:grid-cols-1">
        <div>
          <Image
            src="/images/cinn-college.png"
            width={300}
            height={198}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-6">
          <p className="w-4/5 text-secondary">
            By hiring and managing talented people with skills specific to your
            project, we build you a team that’s accomplished, agile and scalable
            in both directions.
          </p>
          <div>
            <Button>See How It Works</Button>
          </div>
        </div>
      </div>
      <div className="absolute block md:hidden -bottom-4 w-[570px] right-0">
        <Image
          src="/images/cinnamonCollege.png"
          width={750}
          height={478}
          alt="agility"
        />
      </div>
    </div>
  );
}
