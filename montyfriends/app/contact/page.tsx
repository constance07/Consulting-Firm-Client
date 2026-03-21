'use client';
import {useEffect} from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Contact from './contact';
import HeroExtraSpace from "../components/heroExtraSpace";

export default function ContactPage() {
  /*Currently Not Working */
  return (
    useEffect(() => {
      window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }}, []),

  <>
    <HeroExtraSpace/>
    <Navigation/>
    <Contact/>
    <Footer/>
  </>
  )
}
