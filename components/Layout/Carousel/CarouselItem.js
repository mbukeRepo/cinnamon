import Image from "next/image";
const CarouselItem = ({ imageUrl, index, location, description }) => {
  return (
    <div key={index} className="flex group flex-col gap-8">
      <div>
        <Image src={imageUrl} width={640} height={445} alt={location} />
      </div>
      <div className="flex gap-4 items-start">
        <div className="py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 group-hover:text-primary h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </div>
        <div className="flex group-hover:text-primary flex-col gap-3">
          <h3 className="text-2xl font-mont-bold">{location}</h3>
          <p className="text-secondary group-hover:text-primary">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
