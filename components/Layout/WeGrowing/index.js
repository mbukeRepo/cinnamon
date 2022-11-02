import React from "react";
import Image from "next/image";
import Button from "../../UI/Button";

export default function WeGrowing() {
  return (
    <div className="bg-black bg-opacity-90 bg-[url('https://cinnamon.agency/images/noise.png')]">
      <div className="container mx-auto py-[9rem] px-[4.8rem]">
        <div className="grid grid-cols-2 gap-48">
          <div className="flex flex-col gap-8">
            <h3 className="text-white text-6xl font-mont-bold">
              We’re growing
            </h3>
            <p className="text-tartiary">
              Jump on board with Cinnamon and get the privilege of
              <br /> working on challenging projects for leading global <br />
              companies! Make the world a better, more connected
              <br /> place.
            </p>
            <div>
              <Button>See All Positions</Button>
            </div>
          </div>
          <div className="flex flex-col">
            {[
              "Android developer",
              "Android developer",
              "Backend Development Team Lead",
            ].map((team) => (
              <div className="flex gap-4 items-center justify-between py-4 border-b border-white">
                <h4 className="text-white text-2xl font-mont-semi-bold">
                  {team}
                </h4>
                <div className="self-end">
                  <Image
                    src="/images/arrowRightWhite.png"
                    width={48}
                    height={27}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}