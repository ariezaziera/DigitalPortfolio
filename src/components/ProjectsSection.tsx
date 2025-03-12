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

// Define the project categories
const allProjectsData: Record<string, Project[]> = {
  "Web Development": [
    { 
      id: 1, 
      title: "SkillForge Academy", 
      image: "/skillforge.png", 
      description: "An innovative e-learning platform designed to help users enhance their skills through interactive courses, certifications, and community engagement.",
      details: "SkillForge Academy is an innovative e-learning platform designed to help users enhance their skills through interactive courses, certifications, and community engagement. Whether you're looking to upskill in coding, design, or business, this platform offers a seamless learning experience with intuitive navigation and progress tracking.",
      website: "https://webapp.utem.edu.my/student/bitm/b032110154/SkillForge_Academy/",
      youtube: ["https://www.youtube.com/embed/q2JQ3R-c96A?si=7WsiQ_BMquUxusEm"],
      keywords: ["PHP", "MySQL", "Bootstrap"],
      images: ["/skillforge.png", "/skillforge.png", "/skillforge.png"]
    },
    { 
      id: 2, 
      title: "Personal Portfolio v1", 
      image: "/Landing page.png", 
      description: "A personal portfolio showcasing projects, skills, and achievements, built using HTML, CSS, and JavaScript.",
      details: "More details about this project...",
      website: "https://ferdexzra.github.io/online-portfolio",
      youtube: ["https://www.youtube.com/embed/wxSfOrCxsVc?si=LauHaJAEWOPyhWQy"],
      keywords: ["Videography", "Editing"],
      images: ["/Landing page.png", "/Landing page.png", "/Landing page.png"]
    },
    { 
      id: 3, 
      title: "Web-Based Order Calculator", 
      image: "/Ord-C.jpg", 
      description: "A web-based tool for order calculation, built using HTML, CSS, JavaScript, Firebase Firehost, and Firestore. Designed with Figma.",
      details: "More details about this project...",
      website: "https://order-calculation-app.web.app/",
      keywords: ["React", "Firebase", "UI/UX"],
      images: ["/Ord-C.jpg", "/Ord-C.jpg", "/Ord-C.jpg"]
    }
  ],
  "Videography": [
    { 
      id: 4,
      title: "Warna Warni Keharmonian", 
      image: "/wwk.jpg", 
      description: "A multimedia project celebrating Malaysia’s rich cultural diversity through visually compelling storytelling, photography, and videography.",
      details: "More details about this project...",
      youtube: ["https://www.youtube.com/embed/0cinXpffBgY?si=MGZlTXGVNu3o7uDi", "https://www.youtube.com/embed/AqjiNCVW6rQ?si=p_hA3oi_4pCPpI1M"],
      keywords: ["Videography", "Editing"],
      images: ["/wwk.jpg"]
    },
    { 
      id: 5,
      title: "Horro Ads: Corridor", 
      image: "/horro-ads-corridor.jpg", 
      description: "An eerie and suspenseful horror-themed advertisement designed to grab the audience's attention and leave a lasting impression.",
      details: "More details about this project...",
      youtube: ["https://www.youtube.com/embed/T_HfEtxfWUY?si=Hg7ELG33a-pX0fRH"],
      keywords: ["Videography", "Editing"],
      images: ["/horro-ads-corridor.jpg", "/horro-ads-corridor.jpg", "/horro-ads-corridor.jpg"]
    },
    { 
      id: 6,
      title: "Product Advertisement: Sugarbomb Perfume", 
      image: "/product-advertisement-sugarbomb-perfume.jpg", 
      description: "A stylish and elegant promotional video that captures the essence of Sugarbomb Perfume through high-end visuals and storytelling.",
      details: "More details about this project...",
      youtube: ["https://www.youtube.com/embed/ACm_mV3SYtA?si=9NUQEcZBl4OrzSVk"],
      keywords: ["Videography", "Editing"],
      images: ["/product-advertisement-sugarbomb-perfume.jpg", "/product-advertisement-sugarbomb-perfume.jpg", "/product-advertisement-sugarbomb-perfume.jpg"]
    }
  ],
  "AR/VR": [
    { 
      id: 7, 
      title: "Interactive Malacca AR", 
      image: "/interactive-malacca-ar.jpg", 
      description: "The Interactive Malacca AR app revolutionizes the way people explore Malacca’s rich historical heritage using augmented reality.",
      details: "More details about this project...",
      youtube: ["https://www.youtube.com/embed/J8J_IUi3qX4?si=dAChE9i3aLxgDRw3"],
      keywords: ["Unity", "Augmented Reality"],
      images: ["/interactive-malacca-ar.jpg", "/interactive-malacca-ar.jpg", "/interactive-malacca-ar.jpg"]
    },
    { 
      id: 8, 
      title: "Planet Gallery VR", 
      image: "/planet-gallery-vr.jpg", 
      description: "An educational and entertainment-based virtual reality experience that takes users on an awe-inspiring journey across the solar system and beyond.",
      details: "More details about this project...",
      youtube: ["https://www.youtube.com/embed/BDJpSNRWB88?si=eAwMtvq15IbcjlAy"],
      keywords: ["Unreal Engine", "Virtual Reality"],
      images: ["/planet-gallery-vr.jpg", "/planet-gallery-vr.jpg", "/planet-gallery-vr.jpg"]
    },
    { 
      id: 9, 
      title: "CGI: UTeM Canselor Hall", 
      image: "/cgi-utem-canselor-hall.jpg", 
      description: "A high-fidelity 3D-rendered model of UTeM’s Canselor Hall for promotional and visualization purposes.",
      details: "More details about this project...",
      youtube: ["https://www.youtube.com/embed/xLim6oPhVn4?si=TkYjbBsWvwCo9vFM"],
      keywords: ["Unity", "Augmented Reality"],
      images: ["/cgi-utem-canselor-hall.jpg", "/cgi-utem-canselor-hall.jpg", "/cgi-utem-canselor-hall.jpg"]
    }
  ],
  "Standalone Applications": [
    { 
      id: 10, 
      title: "Takoyaki UTeM Order Management System", 
      image: "/takoyaki-utem-order-management-system.jpg", 
      description: "A standalone C++ application using the command line to manage orders and inventory for Takoyaki UTeM.",
      details: "More details about this project...",
      keywords: ["C++", "Standalone Application"],
      images: ["/takoyaki-utem-order-management-system.jpg", "/takoyaki-utem-order-management-system.jpg", "/takoyaki-utem-order-management-system.jpg"]
    },
    { 
      id: 11, 
      title: "Helmet Charter System", 
      image: "/helmet-charter-system.jpg", 
      description: "A Java application promoting helmet awareness, fit testing, and road safety education.",
      details: "More details about this project...",
      youtube: ["https://www.youtube.com/embed/tjNLR3sNwS4?si=l_YUZkH48Fg2YgLK"],
      keywords: ["Java", "Standalone Application"],
      images: ["/helmet-charter-system.jpg", "/helmet-charter-system.jpg", "/helmet-charter-system.jpg"]
    }
  ],
  "Games": [
    { 
      id: 12, 
      title: "Multiplatform Game: Dedalo", 
      image: "/multiplatform-game-dedalo.jpg", 
      description: "A cross-platform puzzle-adventure game that challenges players with engaging brain-teasing levels and immersive storytelling.",
      details: "More details about this project...",
      youtube: ["https://www.youtube.com/embed/rl3Ec4jODgM?si=IQXrwaMHkYGtSNcm"],
      keywords: ["Unity", "Game Development"],
      images: ["/multiplatform-game-dedalo.jpg", "/multiplatform-game-dedalo.jpg", "/multiplatform-game-dedalo.jpg"]
    },
    { 
      id: 13, 
      title: "2D Game: Hungry Monkey", 
      image: "/2d-game-hungry-monkey.jpg", 
      description: "A 2D game where players control a hungry monkey to collect fruits while avoiding obstacles.",
      details: "More details about this project...",
      youtube: ["https://www.youtube.com/embed/GiI0z2HWdiY?si=G8V56KBQaVZeghYQ"],
      keywords: ["Unity", "Game Development"],
      images: ["/2d-game-hungry-monkey.jpg", "/2d-game-hungry-monkey.jpg", "/2d-game-hungry-monkey.jpg"]
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
              className={`px-6 py-2 rounded-full text-white font-semibold transition text-[10px] md:text-sm ${
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

              <p className="my-5 font-semibold underline text-[13px]">Click to expand</p>
            
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

      {/* // Full-Screen Expanded Project View */}
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
              className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-3xl w-full relative overflow-y-auto max-h-[80vh]"
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

              {/* Embedded YouTube Video if available */}
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

              {/* Display Multiple Images in a Swiper Carousel */}
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

              {/* Website Link */}
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