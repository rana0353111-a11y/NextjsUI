"use client";
import HomeSection from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <About />
      <Services />
      <Work />
      <Contact />
    </>
  );
}