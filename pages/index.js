import Header from "../components/Layout/Header";
import ProjectList from "../components/Layout/Project/ProjectList";
import ServiceList from "../components/Layout/Service/ServiceList";
import Button from "../components/UI/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="min-h-[43rem] flex flex-col justify-end min-w-screen bg-black bg-opacity-90 bg-[url('https://cinnamon.agency/images/noise.png')]">
        <Header />
        <div className="text-pureWhite container mx-auto w-full h-full flex gap-6 flex-col px-[4.8rem] pb-24">
          <h1 className="font-mont-heavy text-[4.8rem] leading-[6rem]">
            Results focused design & development agency.
          </h1>
          <p className="text-xl  leading-[2.5rem]">
            Extend your team with our high performing specialists or hire us{" "}
            <br /> to shape your product from scratch. Either way, we’ll get
            your
            <br /> product off the ground and build a momentum for your
            <br /> success.
          </p>
        </div>
      </div>
      <div className="container mx-auto">
        <ProjectList />
      </div>

      <div className="py-36 text-pureWhite bg-black bg-opacity-90 bg-[url('https://cinnamon.agency/images/noise.png')]">
        <div className="container mx-auto">
          <ServiceList />
        </div>
      </div>
      <div className="bg-[#F6F6F6] relative px-[4.8rem] overflow-hidden">
        <div className="py-24 container mx-auto grid grid-cols-2">
          <h2 className="text-5xl font-mont-bold">
            Agile team
            <br /> on demand
          </h2>
          <div className="flex flex-col gap-6">
            <p className="w-4/5">
              By hiring and managing talented people with skills specific to
              your project, we build you a team that’s accomplished, agile and
              scalable in both directions.
            </p>
            <div>
              <Button>See How It Works</Button>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-0 w-64 h-[10rem] right-0">
          <Image
            src="/images/image_3.png"
            width={750}
            height={478}
            alt="agility"
          />
        </div>
      </div>
    </div>
  );
}
