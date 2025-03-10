"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import ContactSection from "@/components/ContactSection";
import ResumeSection from "@/components/Resume Section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <ResumeSection />
      <ProjectsSection />
      <ContactSection/>
      <Footer />
    </>
  );
}
