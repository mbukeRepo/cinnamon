import Footer from "../components/Layout/Footer";
import Hero from "../components/Layout/Home/Hero";
import Head from "next/head";
import Partners from "../components/Layout/Home/Partners";
import About from "../components/Layout/Home/About";
import Projects from "../components/Layout/Home/Projects";
import Socials from "../components/Layout/Home/Socials";
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
        <Partners />
        <About />
        <Projects />
        <Socials />
        <ContactForm />
      </div>
    </div>
  );
}
