import React from "react";
import CallUs from "../components/Layout/About/CallUs";
import Hero from "../components/Layout/About/Hero";
import Statistic from "../components/Layout/About/Statistic";
import Team from "../components/Layout/About/Team";
import Partner from "../components/Layout/Home/Partner";
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
            <h6 className="text-sm text-success font-semibold">Statistic</h6>
            <h3 className="text-linear font-bold text-[2.25rem]">
              Development in numbers
            </h3>
          </div>
          <Statistic />
          <Logos />
        </Section>
      </div>

      <Team />
      <CallUs />
    </div>
  );
}
