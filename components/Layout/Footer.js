import React from "react";
import Image from "next/image";
import Button from "../UI/Button";

export default function Footer() {
  return (
    <div className="pt-[4.5rem] px-[4.8rem] text-pureWhite bg-black bg-opacity-90 bg-[url('https://cinnamon.agency/images/noise.png')]">
      <div className="container mx-auto max-w-[80rem] grid grid-cols-3 border-b border-gray-300 pb-6">
        <div className="flex flex-col justify-between ">
          <div className="flex flex-col gap-7">
            <div>
              <Image
                src="/logos/cinnamon.svg"
                alt="logo"
                width={160}
                height={20}
              />
            </div>
            <ul className="flex flex-col text-footer gap-3 font-mont-semi-bold ">
              <li>Projects</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <p className="underline">hello@cinnamon.agency</p>
        </div>
        <div className="col-span-2 flex flex-col gap-12">
          <h3>All software, zero bullshit.</h3>
          <div className="grid grid-cols-3 pb-24">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-mont-bold">Zagreb</h3>
              <p className="text-footer">
                Slavonska avenija 6, 10000, Zagreb, Croatia +385 99 347 3103
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-mont-bold">Zagreb</h3>
              <p className="text-footer">
                Slavonska avenija 6, 10000, Zagreb, Croatia +385 99 347 3103
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-mont-bold">Zagreb</h3>
              <p className="text-footer">
                Slavonska avenija 6, 10000, Zagreb, Croatia +385 99 347 3103
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col justify-between">
              <h3>Our newsletter</h3>
              <div>
                <input
                  style={{}}
                  placeholder="Your Email"
                  className="transition-all duration-500 bg-transparent focus:border-[#5135FF]  border-b relative border-gray-400 focus:placeholder:absolute focus:placeholder:top-0 focus:placeholder:left-0 focus:placeholder:text-[#5135FF] focus:placeholder:text-xs pt-6 outline-none"
                />
              </div>
              <Button>Subscribe</Button>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <Image
                  src="/images/pangea-badge.svg"
                  width={200}
                  height={56}
                  alt=""
                />
              </div>
              <div className="mt-8">
                <Image
                  src="/images/clutch-badge.png"
                  width={216}
                  height={65}
                  alt="clutch badge"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-between py-8">
        <ul className="flex gap-3">
          <li>© 2022 Cinnamon</li>
          <li>Privacy Policy</li>
        </ul>
        <ul className="flex gap-3">
          <li>
            <Image
              width={41}
              height={25}
              src="/icons/linkedin.svg"
              alt="linked in"
            />
          </li>
          <li>
            <Image
              width={41}
              height={25}
              src="/icons/dribble.svg"
              alt="linked in"
            />
          </li>
          <li>
            <Image width={41} height={25} src="/icons/be.svg" alt="linked in" />
          </li>
          <li>
            <Image
              width={41}
              height={25}
              src="/icons/instagram.svg"
              alt="linked in"
            />
          </li>
          <li>
            <Image
              width={41}
              height={25}
              src="/icons/facebut.svg"
              alt="linked in"
            />
          </li>
          <li>
            <Image
              width={41}
              height={25}
              src="/icons/rss.svg"
              alt="linked in"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
