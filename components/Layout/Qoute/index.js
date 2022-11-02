import React from "react";
import Image from "next/image";
import Direction from "../../UI/Direction";
import View from "../../UI/View";

export default function Qoute() {
  return (
    <div className="relative">
      <div className=" -z-10     font-mont-heavy text-[240px] absolute top-6 left-0 text-[#EDEAFF]">
        “
      </div>
      <div className="px-[4.8rem] py-36 flex flex-col gap-8">
        <div className="flex flex-col gap-16">
          <h3 className="font-mont-bold text-4xl ">
            They’re consistent, and the
            <br /> communication is good.
          </h3>
          <p className="text-secondary">
            When I have a deadline, they would work extra hours on the weekend
            and after
            <br /> hours. Cinnamon gives the impression of being a smaller team
            that’s focused on
            <br /> customers.
          </p>
        </div>
        <div className="flex gap-4 items-start">
          <div>
            <Image
              src="/images/GarinProfile.png"
              width={68}
              height={68}
              alt="Garin Profile"
            />
          </div>
          <div>
            <h3 className="font-mont-bold text-2xl">Garin Toren,</h3>
            <h5 className="text-lg">CEO, ping</h5>
          </div>
        </div>
        <div className="flex justify-between">
          <Direction className="gap-12" />
          <View>VIEW CASE STUDY</View>
        </div>
        <div className="absolute top-1/4 right-[4.8rem]">
          <Image
            src="/images/pingLogo.png"
            width={200}
            height={68}
            alt="Ping"
          />
        </div>
      </div>
    </div>
  );
}
