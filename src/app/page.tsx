"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import ParallaxBackground from "@/components/ParallaxBackground";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <ParallaxBackground />
      <ProjectsSection />
      <ContactSection/>
      <Footer />
    </>
  );
}
