import CarouselItem from "./CarouselItem";
import Image from "next/image";
import Direction from "../../UI/Direction";
export default function CarouseList() {
  const carouselItems = [
    {
      location: "Zagreb",
      description: `Slavonska avenija 6, 10000, Zagreb, Croatia`,
      imageUrl: "/images/carousel-1.jpeg",
    },
    {
      location: "New York",
      description: `Slavonska avenija 6, 10000, New York`,
      imageUrl: "/images/carousel-2.jpeg",
    },
    {
      location: "London",
      description: `Slavonska avenija 6, 10000, London`,
      imageUrl: "/images/carousel-3.jpeg",
    },
  ];
  return (
    <div className="flex flex-col gap-12">
      <h2 className="text-6xl font-mont-bold px-[4.5rem]">Our offices</h2>
      <div className="grid grid-cols-[repeat(3,_544px)] pl-[4.5rem]  gap-8">
        {carouselItems.map(({ location, description, imageUrl }, index) => (
          <CarouselItem
            location={location}
            description={description}
            imageUrl={imageUrl}
            index={index}
          />
        ))}
      </div>
      <Direction className="gap-24" />
    </div>
  );
}
