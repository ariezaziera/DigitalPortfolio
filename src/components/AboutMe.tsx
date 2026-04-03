"use client";

import React from "react";

const AboutMe = () => {
    return (
      <section id="about" className="py-20 px-10 md:px-12 lg:px-32 xs:px-5 text-white" style={{ backgroundColor: "rgba(14, 13, 14, 1)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
              I&apos;m a <span className="text-purple-300">multimedia graduate focused on visual content and digital media</span> with hands-on experience in poster design, photo editing, and basic video production.
              During my internship at 
              <span className="text-purple-300"> Prepaid Technologies Sdn Bhd</span>, I contributed to advertising visuals and supported content creation for online platforms.
          </p>
        <p className="text-lg text-gray-300 leading-relaxed mt-4">
            I also have a background in <span className="text-purple-300">web development</span>, which strengthens my problem-solving approach and understanding of digital platforms. 
            I enjoy creating simple, engaging content and am eager to gain more hands-on experience in media, event coverage, and social content production.
        </p>
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  
