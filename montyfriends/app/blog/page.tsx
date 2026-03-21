'use client';
import {useEffect} from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Blog from './blog';

export default function BlogPage() {
  /*Currently Not Working */
  return (
    useEffect(() => {
      window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }}, []),

  <>
    <Navigation/>
    <Blog/>
    <Footer/>
  </>
  )
}
