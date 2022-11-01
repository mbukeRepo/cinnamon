import Image from "next/image";
import Button from "../UI/Button";
const Header = () => {
  return (
    <div className="bg-transparent fixed top-0 z-40 left-0 w-full">
      <div className="py-4 px-[4.8rem] container  mx-auto  items-center  w-full flex justify-between">
        <div>
          <Image src="/logos/cinnamon.svg" alt="logo" width={160} height={20} />
        </div>
        <div className="flex text-pureWhite  gap-16 items-center">
          <ul className="flex gap-10 font-mont-semi-bold items-center">
            <li>Projects</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
          <ul className="flex gap-10 items-center ">
            <li className="">
              <button className="border-2 border-white rounded-full h-10 w-10 flex items-center justify-center">
                <div className="bg-white h-4 w-3 clippy"></div>
              </button>
            </li>
            <li>
              <Button>Contact Us</Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
