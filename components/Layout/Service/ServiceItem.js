import Image from "next/image";
const ServiceItem = ({ title, text, imageUrl }) => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Image src={imageUrl} width={48} height={48} alt={title} />
      </div>
      <h3 className="font-mont-bold text-2xl">{title}</h3>
      <h5 className="text-[1.06rem] text-tartiary">{text}</h5>
    </div>
  );
};

export default ServiceItem;
