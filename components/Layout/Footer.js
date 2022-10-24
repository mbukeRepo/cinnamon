import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 bg-primary rounded-full"></div>
          <p className="font-bold text-linear text-2xl">BuildIt</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
