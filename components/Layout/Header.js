import Image from "next/image";
import Button from "../UI/Button";
const Header = ({ changeState }) => {
  return (
    <div
      className={`${
        !changeState ? "bg-transparent" : "bg-white"
      } fixed top-0 z-40 ${
        changeState ? "text-black" : "text-pureWhite"
      } left-0 w-full`}
    >
      <div className="py-4 md:px-[3rem] px-[4.8rem]  container  mx-auto  items-center  w-full flex justify-between">
        <div className={`${!changeState ? "block" : "hidden"}`}>
          <Image src="/logos/cinnamon.svg" alt="logo" width={160} height={20} />
        </div>
        <div className={`${!changeState ? "hidden" : "block"}`}>
          <Image
            src="/logos/cinnamon1.svg"
            alt="logo"
            width={160}
            height={20}
          />
        </div>
        <div className="flex   gap-16 items-center">
          <ul className="flex xl:hidden gap-10 font-mont-semi-bold items-center">
            <li className="relative hover:cursor-pointer after:hidden hover:after:inline-block hover:text-primary after:absolute after:-bottom-4 after:-translate-x-1/2 after:rounded-full after:left-1/2 after:content-[''] after:w-2 after:h-2 after:bg-primary ">
              Projects
            </li>
            <li className="relative transition-all duration-300 hover:cursor-pointer after:hidden hover:after:inline-block hover:text-primary after:absolute after:-bottom-4 after:-translate-x-1/2 after:rounded-full after:left-1/2 after:content-[''] after:w-2 after:h-2 after:bg-primary ">
              Services
            </li>
            <li className="relative transition-all duration-300 hover:cursor-pointer after:hidden hover:after:inline-block hover:text-primary after:absolute after:-bottom-4 after:-translate-x-1/2 after:rounded-full after:left-1/2 after:content-[''] after:w-2 after:h-2 after:bg-primary ">
              About Us
            </li>
            <li className="relative transition-all duration-300 hover:cursor-pointer after:hidden hover:after:inline-block hover:text-primary after:absolute after:-bottom-4 after:-translate-x-1/2 after:rounded-full after:left-1/2 after:content-[''] after:w-2 after:h-2 after:bg-primary ">
              Careers
            </li>
            <li className="relative transition-all duration-300 hover:cursor-pointer after:hidden hover:after:inline-block hover:text-primary after:absolute after:-bottom-4 after:-translate-x-1/2 after:rounded-full after:left-1/2 after:content-[''] after:w-2 after:h-2 after:bg-primary ">
              Blog
            </li>
          </ul>
          <ul className="flex gap-10 xl:hidden items-center ">
            <li className="">
              <button
                className={`border-2 ${
                  changeState ? "border-primary" : "border-white"
                } rounded-full h-10 w-10 flex items-center justify-center`}
              >
                <div
                  className={`${
                    !changeState ? "bg-white" : "bg-primary"
                  } h-4 w-3 clippy`}
                ></div>
              </button>
            </li>
            <li>
              <Button>Contact Us</Button>
            </li>
          </ul>
          <div
            className={`hidden xl:block ${!changeState ? "" : "text-black"}`}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="#cccccc"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="text-black"
            >
              <path
                d="M5.33301 8H26.6663"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.33301 16H18.6663"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.33301 24H23.9997"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
