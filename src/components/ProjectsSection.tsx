"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
        <div className="flex justify-center gap-4 mt-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-white font-semibold transition ${
                selectedCategory === category ? "bg-purple-600 shadow-md" : "bg-gray-700 hover:bg-purple-500"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
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

              {/* ✅ Keywords with Color Mapping */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.keywords.map((keyword: string, index: number) => (
                  <span 
                    key={index} 
                    className={`text-white text-xs px-3 py-2 rounded-full ${
                      keywordColors[keyword] || "bg-gray-600"
                    }`}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
