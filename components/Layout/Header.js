import Link from "next/link";
import Button from "../UI/Button";
const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-12">
        <div>
          <Link href="/">
            <a className="w-full h-full flex gap-3 items-center">
              <div className="w-12 h-12 bg-primary rounded-full"></div>
              <p className="font-bold text-linear text-2xl">BuildIt</p>
            </a>
          </Link>
        </div>
        <ul className="text-tartiary flex gap-3 font-semibold">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contacts">Contact</Link>
          </li>
        </ul>
        <div className="text-white">
          <Button className="bg-primary px-12">Need a project?</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
