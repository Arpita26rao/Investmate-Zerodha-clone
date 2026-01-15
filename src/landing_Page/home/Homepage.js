import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Education from "./Education";
import Stats from "./Stats";
import OpenAccount from "../../OpenAccount";
import ProductPage from "../../Products/ProductPage";
import PricingPage from "../about/AboutPage";
import Aboutpage from "../about/AboutPage";



function Homepage() {
  return (
    <>
      <Hero />
      <Stats />
      <Awards />
      <Aboutpage/>
      <ProductPage/>
      <PricingPage/>
      <Education />
      <OpenAccount />
    </>
  );
}

export default Homepage;
