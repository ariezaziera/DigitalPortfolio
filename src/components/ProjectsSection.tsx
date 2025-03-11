"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
  youtube?: string[];
  keywords: string[];
  images?: string[];
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
      keywords: ["React", "Firebase", "UI/UX"],
      images: ["/Ord-C.jpg", "/Ord-C.jpg", "/Ord-C.jpg"]
    },
    { 
      id: 2, 
      title: "SkillForge Academy (LMS)", 
      image: "/skillforge.png", 
      description: "An online learning platform (LMS).",
      details: "SkillForge Academy is an innovative e-learning platform designed to help users enhance their skills through interactive courses, certifications, and community engagement. Whether you're looking to upskill in coding, design, or business, this platform offers a seamless learning experience with intuitive navigation and progress tracking.",
      website: "https://webapp.utem.edu.my/student/bitm/b032110154/SkillForge_Academy/",
      youtube: ["https://www.youtube.com/embed/q2JQ3R-c96A?si=7WsiQ_BMquUxusEm"],
      keywords: ["PHP", "MySQL", "Bootstrap"]
    },
    { 
      id: 7, 
      title: "E-commerce Dashboard", 
      image: "/ecommerce-dashboard.jpg", 
      description: "A responsive dashboard for an e-commerce platform.",
      details: "More details about this project...",
      keywords: ["React", "Firebase", "UI/UX"]
    },
    { 
      id: 8, 
      title: "Company Portfolio Website", 
      image: "/company-portfolio.jpg", 
      description: "A sleek company portfolio website.",
      details: "More details about this project...",
      keywords: ["PHP", "Bootstrap"]
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
      youtube: ["https://www.youtube.com/embed/wxSfOrCxsVc?si=LauHaJAEWOPyhWQy"],
      keywords: ["Videography", "Editing"]
    },
    { 
      id: 9,
      title: "Event Highlight Video", 
      image: "/event-highlight.jpg", 
      description: "A cinematic video covering a corporate event.",
      details: "More details about this project...",
      keywords: ["Videography", "Editing"]
    },
    { 
      id: 10,
      title: "Short Film Editing", 
      image: "/short-film.jpg", 
      description: "A short film showcasing video editing techniques.",
      details: "More details about this project...",
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
      youtube: ["https://youtube.com/example"],
      keywords: ["Unity", "Augmented Reality"]
    },
    { 
      id: 5, 
      title: "Galaxy Museum VR", 
      image: "/galaxy-vr.jpg", 
      description: "A virtual reality museum of the galaxy.",
      details: "More details about this project...",
      youtube: ["https://youtube.com/example"],
      keywords: ["Unreal Engine", "Virtual Reality"]
    },
    { 
      id: 11, 
      title: "Virtual Tour App", 
      image: "/virtual-tour.jpg", 
      description: "A VR app for interactive virtual tours.",
      details: "More details about this project...",
      youtube: ["https://youtube.com/example"],
      keywords: ["Unity", "Virtual Reality"]
    },
    { 
      id: 12, 
      title: "AR Product Visualization", 
      image: "/ar-product.jpg", 
      description: "An AR app for visualizing 3D products.",
      details: "More details about this project...",
      keywords: ["Unity", "Augmented Reality"]
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
    },
    { 
      id: 13, 
      title: "Python Data Analysis Tool", 
      image: "/python-tool.jpg", 
      description: "A data analysis and visualization tool using Python.",
      details: "More details about this project...",
      keywords: ["Python", "Data Analysis"]
    },
    { 
      id: 14, 
      title: "IoT Smart Home System", 
      image: "/iot-smart-home.jpg", 
      description: "A smart home automation system using IoT.",
      details: "More details about this project...",
      keywords: ["IoT", "Embedded Systems"]
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // State for full-size image

  return (
    <section id="projects" className="py-20 px-6 text-center text-gray-100 bg-[#0E0D0E]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold">My Projects</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mt-6 px-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-white font-semibold transition text-lg md:text-xl ${
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
              initial={{ boxShadow: "0px 0px 5px rgba(255, 255, 255, 0.2)" }}
              whileHover={{ boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.8)", scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => setExpandedProject(project)}
            >
              <div className="relative w-full aspect-[5/3] overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  layout="fill" // Ensures full container coverage
                  objectFit="cover" // Maintains aspect ratio without stretching
                  className="rounded-lg"
                />
              </div>

              <h3 className="text-xl text-start font-semibold mt-4 text-gray-200">{project.title}</h3>
              
              <motion.p 
                className="text-gray-100 mt-2 text-start"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {project.description}
              </motion.p>
            
              {/* Keyword Badges */}
              <div className="flex flex-wrap mt-4 gap-2">
                {project.keywords.map((keyword) => (
                  <span 
                    key={keyword} 
                    className={`px-3 py-1 text-sm font-semibold text-white rounded-full transition-all duration-300 ${
                      keywordColors[keyword] || "bg-gray-600"
                    } hover:scale-105 hover:shadow-md`}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.div>          
          ))}
        </motion.div>
      </div>

      {/* ✅ Full-Screen Expanded Project View */}
      <AnimatePresence>
        {expandedProject && (
          <motion.div 
            className="fixed inset-0 bg-[#0E0D0E] bg-opacity-80 flex items-center justify-center z-50 p-6"
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

              {/* ✅ Embedded YouTube Video if available */}
              {expandedProject.youtube && expandedProject.youtube.length > 0 && (
                <div className="youtube-videos flex flex-wrap justify-center gap-4 my-5">
                  {expandedProject.youtube.map((link, index) => (
                    <iframe
                      key={index}
                      width="300"
                      height="123"
                      src={link}
                      title={`YouTube video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full md:w-[48%] lg:w-[30%]"
                    ></iframe>
                  ))}
                </div>
              )}

              {/* ✅ Display Multiple Images in a Swiper Carousel */}
              {expandedProject.images && expandedProject.images.length > 0 && (
                <div className="project-images my-5 px-10">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop
                    className="w-full h-50 sm:h-70"
                  >
                    {expandedProject.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div 
                          className="relative w-full h-full overflow-hidden rounded-lg cursor-pointer"
                          onClick={() => setSelectedImage(image)} // Open full-size image on click
                        >
                          <Image
                            src={image}
                            alt={`Project Image ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
              
              <p className="text-gray-300 px-5 py-3">{expandedProject.details}</p>  

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

      {/* ✅ Full-Size Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-[#0E0D0E] bg-opacity-80 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} // Close on background click
          >
            <motion.div 
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <button 
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
                onClick={() => setSelectedImage(null)}
              >
                ✖
              </button>
              <Image
                src={selectedImage}
                alt="Full-size Image"
                width={1200}
                height={800}
                className="rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;