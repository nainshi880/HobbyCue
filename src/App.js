import React from "react";
import NavigationBar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import AddOwnSection from "./components/AddOwnSection";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <Features />
      <AddOwnSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;