import React from "react";
import CallUs from "../components/Layout/About/CallUs";
import Hero from "../components/Layout/About/Hero";
import Statistics from "../components/Layout/About/Statistics";
import Team from "../components/Layout/About/Team";
import Partners from "../components/Layout/Home/Partners";
import Logos from "../components/UI/Logos";
import Section from "../components/UI/Section";
import Head from "next/head";

export default function about() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Hero />
      <div className="mb-12">
        <Section>
          <div className="flex gap-4 flex-col py-12 items-center">
            <h6 className="text-sm text-success font-semibold">Statistics</h6>
            <h3 className="text-linear font-bold text-[2.25rem]">
              Development in numbers
            </h3>
          </div>
          <Statistics />
          <Logos />
        </Section>
      </div>

      <Team />
      <CallUs />
    </div>
  );
}
