import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import Cta from "../components/Cta";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="Do you lost your Stuff?" subtitle="We can help you!">
          <Link to="/register" className="btn-primary">
            Start now for Free!
          </Link>
        </Banner>
      </Hero>
      <Services />
      <Cta />
    </>
  );
}
