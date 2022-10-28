import Footer from "../components/Layout/Footer";
import Hero from "../components/Layout/Home/Hero";
import Head from "next/head";
import Partner from "../components/Layout/Home/Partner";
import About from "../components/Layout/Home/About";
import Project from "../components/Layout/Home/Project";
import Social from "../components/Layout/Home/Social";
import ContactForm from "../components/Layout/ContactForm";
import Heading from "../components/Layout/Home/Heading";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Home</title>
      </Head>
      <div className="">
        <Heading />
        <Hero />
        <Partner />
        <About />
        <Project />
        <Social />
        <ContactForm />
      </div>
    </div>
  );
}
