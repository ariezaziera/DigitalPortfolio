"use client";

import React from "react";

const AboutMe = () => {
    return (
      <section id="about" className="py-20 px-6 md:px-12 lg:px-32 text-white" style={{ backgroundColor: "rgba(14, 13, 14, 1)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I&apos;m a passionate <span className="text-purple-300">Multimedia & Full Stack Developer</span> with a strong foundation in design, development, and problem-solving. 
            Currently completing my studies, I have gained valuable experience during my internship at 
            <span className="text-purple-300"> Prepaid Technologies Sdn Bhd</span>, where I worked on various projects including order calculator automation and digital content creation.
          </p>
  
          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            My skills include <span className="text-purple-300">teamwork, communication, and analytical thinking</span>. 
            I am always eager to learn and grow, embracing new challenges in the world of technology.
          </p>
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  