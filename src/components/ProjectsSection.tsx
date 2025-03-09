"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Define TypeScript interfaces
interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  details: string;
  website?: string;
  youtube?: string;
  keywords: string[];
}

// ✅ Define keyword color mapping
const keywordColors: Record<string, string> = {
  "React": "bg-blue-500",
  "Firebase": "bg-orange-500",
  "UI/UX": "bg-green-500",
  "PHP": "bg-purple-500",
  "MySQL": "bg-yellow-500",
  "Bootstrap": "bg-indigo-500",
  "Videography": "bg-red-500",
  "Editing": "bg-pink-500",
  "Unity": "bg-gray-500",
  "Augmented Reality": "bg-teal-500",
  "Unreal Engine": "bg-blue-600",
  "Virtual Reality": "bg-cyan-500",
  "C++": "bg-gray-700",
  "Standalone Application": "bg-gray-800"
};

// ✅ Define the project categories
const allProjectsData: Record<string, Project[]> = {
  "Web Development": [
    { 
      id: 1, 
      title: "Web-Based Order Calculator", 
      image: "/Ord-C.jpg", 
      description: "A web-based tool for order calculation.",
      details: "More details about this project...",
      website: "https://order-calculation-app.web.app/",
      keywords: ["React", "Firebase", "UI/UX"]
    },
    { 
      id: 2, 
      title: "SkillForge Academy (LMS)", 
      image: "/skillforge.png", 
      description: "An online learning platform (LMS).",
      details: "More details about this project...",
      website: "https://webapp.utem.edu.my/student/bitm/b032110154/SkillForge_Academy/",
      keywords: ["PHP", "MySQL", "Bootstrap"]
    }
  ],
  "Videography": [
    { 
      id: 3,
      title: "Personal Portfolio v1", 
      image: "/Landing page.png", 
      description: "A personal portfolio showcasing projects.",
      details: "More details about this project...",
      website: "https://ferdexzra.github.io/online-portfolio",
      youtube: "https://www.youtube.com/embed/wxSfOrCxsVc?si=LauHaJAEWOPyhWQy",
      keywords: ["Videography", "Editing"]
    }
  ],
  "AR/VR": [
    { 
      id: 4, 
      title: "Interactive AR App", 
      image: "/ar-app.jpg", 
      description: "Markerless AR application for historical sites.",
      details: "More details about this project...",
      youtube: "https://youtube.com/example",
      keywords: ["Unity", "Augmented Reality"]
    },
    { 
      id: 5, 
      title: "Galaxy Museum VR", 
      image: "/galaxy-vr.jpg", 
      description: "A virtual reality museum of the galaxy.",
      details: "More details about this project...",
      youtube: "https://youtube.com/example",
      keywords: ["Unreal Engine", "Virtual Reality"]
    }
  ],
  "Other Projects": [
    { 
      id: 6, 
      title: "Standalone C++ Program", 
      image: "/cpp-project.jpg", 
      description: "An order management system using C++.",
      details: "More details about this project...",
      keywords: ["C++", "Standalone Application"]
    }
  ]
};

// ✅ "All Projects" category (combine all projects)
const allProjects = Object.values(allProjectsData).flat();

// ✅ Include "All Projects" in category selection
const categories = ["All Projects", ...Object.keys(allProjectsData)];

const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Projects");
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-6 text-center text-gray-100 bg-[#0E0D0E]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold">My Projects</h2>

        {/* Filter Buttons */}
        <div className="flex overflow-x-auto gap-2 md:gap-4 mt-6 px-4 no-scrollbar">
          {categories.map((category) => (
            <button
                key={category}
                className={`px-6 py-2 rounded-full text-white font-semibold transition ${
                selectedCategory === category 
                    ? "bg-purple-600 shadow-md scale-105"  // Active state
                    : "bg-gray-700 hover:bg-purple-500"
                }`}
                onClick={() => setSelectedCategory(category)}
            >
                {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div 
            key={selectedCategory} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }} 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10"
            >
          {(selectedCategory === "All Projects" ? allProjects : allProjectsData[selectedCategory]).map((project) => (
            <motion.div 
              key={project.id} 
              className="relative p-6 rounded-lg cursor-pointer transition-all duration-500 bg-gray-800"
              style={{ boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)" }}
              whileHover={{ boxShadow: "0px 0px 10px rgba(255, 255, 255, 1)", scale: 1.05 }}
              onClick={() => setExpandedProject(project)}
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              <h3 className="text-xl text-start font-semibold mt-4 text-gray-200">{project.title}</h3>
              <p className="text-gray-100 mt-2 text-start">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ✅ Full-Screen Expanded Project View */}
      <AnimatePresence>
        {expandedProject && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedProject(null)} // Close on background click
          >
            <motion.div 
              className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-3xl w-full relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <button 
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
                onClick={() => setExpandedProject(null)}
              >
                ✖
              </button>

              <h2 className="text-3xl font-bold mb-4">{expandedProject.title}</h2>
              <p className="text-gray-300">{expandedProject.details}</p>

              {/* ✅ Embedded YouTube Video if available */}
              {expandedProject.youtube && (
                <div className="mt-4">
                  <iframe 
                    width="100%" 
                    height="250" 
                    src={expandedProject.youtube} 
                    title="YouTube video player"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen 
                    className="rounded-lg shadow-lg"
                  ></iframe>
                </div>
              )}

              {/* ✅ Website Link */}
              {expandedProject.website && (
                <div className="mt-4">
                  <a 
                    href={expandedProject.website} 
                    target="_blank" 
                    className="text-blue-400 hover:underline text-lg"
                  >
                    Visit Website
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
