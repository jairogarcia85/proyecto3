import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <div>
      <section className="cta">
        <Banner title="Get your code now" subtitle="It's free!">
          <Link to="/register" className="btn-primary">
            Start now for Free!
          </Link>
        </Banner>
      </section>
    </div>
  );
}
