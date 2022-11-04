import Header from "../components/Layout/Header";
import ProjectList from "../components/Layout/Project/ProjectList";
import ServiceList from "../components/Layout/Service/ServiceList";
import CarouseList from "../components/Layout/Carousel/CarouseList";
import BlogList from "../components/Layout/Blog/BlogList";
import Button from "../components/UI/Button";
import Qoute from "../components/Layout/Qoute";
import Footer from "../components/Layout/Footer";
import WeGrowing from "../components/Layout/WeGrowing";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import WhoWeAre from "../components/Layout/WhoWeAre";
import CinnamonCollege from "../components/Layout/CinnamonCollege";
import CTA from "../components/Layout/CTA";
import Head from "next/head";
import Container from "../components/UI/Container";

export default function Home() {
  const [changeState, setChangeState] = useState(false);
  const heroRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const coords = heroRef.current.getBoundingClientRect();
      setChangeState(false);
      if (coords.top < -40) {
        setChangeState(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Head>
        <title>CINNAMON | All software, zero bullshit.</title>
        <meta
          name="description"
          content="The one-stop shop to design, develop and deploy your next digital project."
        />
        <link rel="icon" href="https://cinnamon.agency/favicon-32x32.png" />
      </Head>
      <div
        ref={heroRef}
        className="min-h-[43rem]  md:min-h-[18rem] sm:max-h-[50rem] relative flex flex-col justify-end min-w-screen bg-black bg-opacity-90 bg-[url('https://cinnamon.agency/images/noise.png')]"
      >
        <Header changeState={changeState} />
        <Container className="text-pureWhite w-full h-full flex gap-6 flex-col md:px-[2rem] px-[4.8rem] pb-24 ">
          <h1 className="font-mont-heavy  text-[4.8rem] md:text-[2.8rem] sm:text-[1.8rem] md:pt-24 md:leading-[4rem] leading-[6rem]">
            Results focused design & development agency.
          </h1>
          <p className="text-xl md:text-lg lg:leading-[1.5rem]  leading-[2.5rem]">
            Extend your team with our high performing specialists or hire us{" "}
            <br className="md:hidden" /> to shape your product from scratch.
            Either way, we’ll get your
            <br className="md:hidden" /> product off the ground and build a
            momentum for your
            <br className="md:hidden" /> success.
          </p>
        </Container>
      </div>
      <Container>
        <ProjectList />
      </Container>

      <div className="py-36 md:py-24 text-pureWhite bg-black bg-opacity-90 bg-[url('https://cinnamon.agency/images/noise.png')]">
        <Container>
          <ServiceList />
        </Container>
      </div>
      <div className="bg-cinn-bg-color relative px-[5rem] md:px-[2rem] 2xl:px-[12rem] overflow-hidden">
        <div className="py-36 max-w-[87.5rem] mx-auto relative z-10  grid grid-cols-2 md:grid-cols-1 md:gap-12">
          <h2 className="text-5xl font-mont-bold">
            Agile team
            <br className="block md:hidden" /> on demand
          </h2>
          <div className="hidden w-[24rem] md:block">
            <Image
              src="/images/image_3.png"
              width={750}
              height={478}
              alt="agility"
            />
          </div>
          <div className="flex flex-col gap-6">
            <p className="w-4/5 text-secondary">
              By hiring and managing talented people with skills specific to
              your project, we build you a team that’s accomplished, agile and
              scalable in both directions.
            </p>
            <div>
              <Button>See How It Works</Button>
            </div>
          </div>
        </div>
        <div className="absolute block md:hidden -bottom-0 w-96 h-[10rem] right-0">
          <Image
            src="/images/image_3.png"
            width={750}
            height={478}
            alt="agility"
          />
        </div>
      </div>
      <Container>
        <Qoute />
      </Container>
      <WhoWeAre />
      <WeGrowing />
      <CinnamonCollege />
      <Container className="py-24">
        <CarouseList />
      </Container>
      <Container className="py-24">
        <BlogList />
      </Container>
      <CTA />
      <Footer />
    </div>
  );
}
