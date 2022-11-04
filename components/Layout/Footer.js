import React from "react";
import Image from "next/image";
import Button from "../UI/Button";
import Container from "../UI/Container";

export default function Footer() {
  return (
    <div className="pt-[4.5rem] px-[4.8rem] md:px-[2rem] text-pureWhite bg-black bg-opacity-90 bg-[url('https://cinnamon.agency/images/noise.png')]">
      <Container className="min-w-[18rem] max-w-[80rem] grid grid-cols-3 md:gap-16 md:grid-cols-1 border-b border-gray-300 pb-6">
        <div className="flex flex-col justify-between ">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-12">
              <div>
                <Image
                  src="/logos/cinnamon.svg"
                  alt="logo"
                  width={160}
                  height={20}
                />
              </div>
              <h3 className="text-2xl  hidden md:block font-mont-bold">
                All software,
                <br /> zero bullshit.
              </h3>
            </div>
            <div className="grid md:text-sm grid-cols-1 md:grid-cols-2 md:gap-[10rem] w-full">
              <ul className="flex flex-col text-footer gap-3  font-mont-semi-bold ">
                <li>Home</li>
                <li>Projects</li>
                <li>Services</li>
              </ul>
              <ul className="flex flex-col text-footer gap-3 font-mont-semi-bold ">
                <li className="whitespace-nowrap">About Us</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <p className="underline block md:hidden">hello@cinnamon.agency</p>
        </div>
        <div className="col-span-2 flex flex-col gap-12">
          <h3 className="text-3xl block md:hidden font-mont-bold">
            All software, zero bullshit.
          </h3>
          <div className="grid grid-cols-3 md:text-sm md:grid-cols-2 gap-16 md:gap-24 pb-24">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-mont-bold">Zagreb</h3>
              <p className="text-footer text-sm">
                Slavonska avenija 6, 10000, Zagreb, Croatia +385 99 347 3103
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-mont-bold">New York</h3>
              <p className="text-footer text-sm">
                Slavonska avenija 6, 10000, Zagreb, Croatia +385 99 347 3103
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-mont-bold">Belgrade</h3>
              <p className="text-footer text-sm">
                Slavonska avenija 6, 10000, Zagreb, Croatia +385 99 347 3103
              </p>
            </div>
          </div>

          <div className="flex md:flex-col md:gap-16 justify-between">
            <div className="flex flex-col md:w-[18rem] md:gap-6 justify-between">
              <h3>Our newsletter</h3>
              <div className="w-full relative">
                <input
                  style={{}}
                  className="transition-all peer w-full duration-700 bg-transparent focus:border-primary  border-b relative border-gray-400 pt-6 outline-none"
                />
                <span className="absolute left-0 peer-focus:top-0  top-1/2 text-sm peer-focus:text-primary transition-all  duration-700">
                  Your Email
                </span>
              </div>
              <Button>Subscribe</Button>
            </div>
            <div className="flex flex-col md:items-center justify-between">
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
              <p className="mt-5 underline hidden md:block w-full text-center max-w-[18rem]">
                hello@cinnamon.agency
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container className="min-w-[18rem] max-w-[80rem] md:flex-col-reverse flex justify-between py-8">
        <ul className="flex gap-3 justify-center">
          <li>© 2022 Cinnamon</li>
          <li>Privacy Policy</li>
        </ul>
        <ul className="flex gap-3 md:border-b md:border-gray-400 pb-6 md:justify-center md:mb-12">
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
      </Container>
    </div>
  );
}
