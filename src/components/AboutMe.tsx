"use client";

import React from "react";

const AboutMe = () => {
    return (
      <section id="about" className="py-20 px-6 md:px-12 lg:px-32 text-white" style={{ backgroundColor: "rgba(14, 13, 14, 1)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">About Me</h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              I’m a <span className="text-purple-300">Frontend Developer</span> with experience in building web applications using 
              <span className="text-purple-300"> Next.js, React, and Tailwind CSS</span>. I focus on creating responsive, user-friendly interfaces and developing functional systems that solve real-world problems.
          </p>
            
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mt-4">
                I have hands-on experience working with fullstack technologies, including 
                <span className="text-purple-300"> Node.js and MongoDB</span>, allowing me to understand how frontend applications integrate with backend systems and data.
            </p>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed mt-4">
                With a background in <span className="text-purple-300">multimedia and visual content</span>, I bring strong design awareness into my development work, ensuring that applications are not only functional but also visually engaging and user-focused.
            </p>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed mt-4">
                I am actively seeking opportunities to contribute as a frontend developer, where I can apply my skills to build meaningful products and continue growing in a real-world environment.
            </p>
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  
