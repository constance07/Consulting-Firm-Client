'use client';
import {useEffect} from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Services from "../services/services";
export default function About() {
  return (
    useEffect(() => {
      window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }}, []),

  <>
    <Navigation/>
    <Services/>
    <Footer/>
  </>
  )
}
