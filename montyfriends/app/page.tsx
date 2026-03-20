'use client';
import {useEffect} from "react";
import Hero from "./components/hero";
import Navigation from "./components/navigation";
import CompanyAbout from "./components/companyAbout";
import Footer from "./components/footer";
import HeroExtraSpace from "./components/heroExtraSpace";

export default function HomePage() {
  /*Currently Not Working */
  return (
    useEffect(() => {
      window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }}, []),

  <>
    <HeroExtraSpace/>
    <Navigation/>
    <Hero/>
    <CompanyAbout/>
    <Footer/>
  </>
  )
}
