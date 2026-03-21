'use client';
import {useEffect} from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Founder from './founder';

export default function FounderPage() {
  /*Currently Not Working */
  return (
    useEffect(() => {
      window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }}, []),

  <>
    <Navigation/>
    <Founder/>
    <Footer/>
  </>
  )
}
