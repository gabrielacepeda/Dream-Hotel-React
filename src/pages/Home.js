import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
// import Footer from "../components/Footer";

export default function Home() {
  window.scrollTo(0, 0);
  return (
    <>
      <Hero>
        <Banner title="Book your stay with us">
          <Link to="/rooms" className="btn-primary">
            Discover
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />

    </>
  );
}
