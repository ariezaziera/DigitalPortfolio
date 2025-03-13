"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiFirebase,
  SiFigma,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiApple,
  SiUnity,
  SiBlender,
  SiAdobeillustrator,
  SiUnrealengine,
  SiCplusplus,
  SiReact,
  SiAdobephotoshop, // Placeholder for C#
} from "react-icons/si";

import {
  FaTerminal,
  FaVideo,
  FaVolumeUp,
  FaCamera,
  FaLightbulb,
  FaCode, // Placeholder for Eclipse IDE
  FaMobile, // Corrected for FaMobileAlt
  FaChevronCircleDown, // Corrected for FaChevronCircleDown
} from "react-icons/fa";


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
  role?: string;
  toolsUsed?: { name: string; icon: React.ReactNode }[];
  keyFeatures?: string[];
  challenges?: string;
  solution?: string;
}

const keywordColors: Record<string, string> = {
  // Web Development
  "React": "bg-blue-500",
  "Firebase": "bg-orange-500",
  "UI/UX Design": "bg-green-500",
  "PHPMyAdmin": "bg-purple-500",
  "MySQL": "bg-yellow-500",
  "Bootstrap": "bg-indigo-500",
  "HTML": "bg-orange-400",
  "CSS": "bg-blue-400",
  "JavaScript": "bg-yellow-400",

  // Videography
  "Videography": "bg-red-500",
  "Editing": "bg-pink-500",
  "Adobe Premiere Pro": "bg-blue-600",
  "After Effects": "bg-purple-500",
  "Adobe Audition": "bg-blue-500",
  "Adobe Illustrator": "bg-orange-500",
  "Sound Design": "bg-green-600",
  "Green Screen Effects": "bg-teal-600",
  "Lighting Equipment": "bg-yellow-600",

  // AR/VR
  "Unity": "bg-blue-800",
  "Augmented Reality": "bg-teal-500",
  "Unreal Engine": "bg-blue-600",
  "Virtual Reality": "bg-cyan-500",
  "Blender": "bg-orange-600",
  "ARCore": "bg-teal-700",
  "Oculus Rift": "bg-purple-700",

  // Standalone Applications
  "C++": "bg-gray-700",
  "Java": "bg-red-600",
  "Standalone Application": "bg-gray-800",
  "Command-line interface": "bg-gray-900",
  "Eclipse IDE": "bg-purple-800",
  "Visual Studio": "bg-blue-900",
  "Visual Studio Code": "bg-blue-500",

  // Games
  "Game Development": "bg-purple-600",
  "Puzzle-Adventure": "bg-indigo-600",
  "2D Platformer": "bg-green-700",
  "C#": "bg-purple-500",
  "Photoshop": "bg-blue-500",
  "Animation Tools": "bg-pink-600",

  // Miscellaneous
  "AI-powered recommendations": "bg-teal-400",
  "3D Rendering": "bg-orange-700",
  "Architectural Visualization": "bg-blue-700",
  "Marketing": "bg-pink-500",
  "Presentations": "bg-indigo-400",
};

// Define the project categories
const allProjectsData: Record<string, Project[]> = {
  "Web Development": [
    { 
      id: 1, 
      title: "SkillForge Academy", 
      image: "/skillforge.png", 
      description: "A learning website where users can take courses, earn certificates, and get AI suggestions to improve their skills easily.",
      details: "SkillForge Academy is an e-learning platform designed to offer interactive courses, certifications, and AI-powered learning recommendations. Built using PHP, MySQL, HTML, CSS, and JavaScript, it provides a seamless learning experience with multi-role authentication, allowing students, instructors, and administrators to access features tailored to their needs. Users can track progress, complete assignments, and earn certifications. The system also includes an intuitive dashboard, secure authentication, and a responsive UI to ensure accessibility across devices. Designed for efficiency and engagement, it enhances digital learning with a user-friendly interface and structured course management.",
      website: "https://webapp.utem.edu.my/student/bitm/b032110154/SkillForge_Academy/",
      youtube: ["https://www.youtube.com/embed/q2JQ3R-c96A?si=7WsiQ_BMquUxusEm"],
      keywords: ["E-learning", "PHPMyAdmin", "MySQL", "HTML", "CSS", "JavaScript", "UI/UX Design", "Frontend Development"],
      images: ["/skillforge.png", "/skillforge.png", "/skillforge.png"],
      role: "Full-stack Developer, UI/UX Designer & Group Leader",
      toolsUsed: [
        { name: "PHPMyAdmin", icon: <SiMysql className="text-blue-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
        { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
      ],
      keyFeatures: ["Interactive courses", "Certifications", "AI-powered course recommendations", "Progress tracking", "Multi-role authentication"],
      challenges: "Implementing secure multi-role authentication and managing complex database queries.",
      solution: "Used PHPMyAdmin and MySQL to create a secure database structure and enforce role-based access control."
    },
    { 
      id: 2, 
      title: "Personal Portfolio v1", 
      image: "/Landing page.png", 
      description: "A simple personal website showing projects, skills, and achievements with easy navigation, nice design, and mobile-friendly layout.",
      details: "A personal portfolio website showcasing my web development, UI/UX design, and multimedia projects. Built using HTML, CSS, and JavaScript, it features a clean and modern design, smooth navigation, and a responsive layout to ensure an optimal viewing experience on all devices. The site includes interactive project galleries, an about section, contact forms, and social media links to connect with recruiters and potential clients. It highlights my technical skills, creative approach, and professional achievements, serving as an online resume to attract job opportunities and freelance projects.",
      website: "https://ferdexzra.github.io/online-portfolio",
      youtube: ["https://www.youtube.com/embed/wxSfOrCxsVc?si=LauHaJAEWOPyhWQy"],
      keywords: ["Portfolio Website", "HTML", "CSS", "JavaScript", "UI/UX Design", "Frontend Development", "Responsive Design"],
      images: ["/Landing page.png", "/Landing page.png", "/Landing page.png"],
      role: "Full-stack Developer & UI/UX Designer",
      toolsUsed: [
        { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
        { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
      ],
      keyFeatures: ["Responsive design", "Project showcase", "Skills section", "Contact form", "Mobile-friendly layout"],
      challenges: "Ensuring cross-browser compatibility and responsive design for various screen sizes.",
      solution: "Used modern CSS techniques (Flexbox, Grid) and media queries to create a fully responsive and consistent layout."
    },
    { 
      id: 3, 
      title: "Web-Based Order Calculator", 
      image: "/Ord-C.jpg", 
      description: "A website tool that helps calculate orders quickly using Firebase, making business transactions easier and faster for users.",
      details: "A web-based tool designed to automate order calculations and streamline business transactions. Developed with React and Firebase, it features a dynamic interface, real-time data updates, and secure authentication for seamless order and inventory management. The application allows sales representatives to input order details, calculate totals automatically, and generate structured order summaries. Built with a user-friendly design and mobile compatibility, it improves efficiency by eliminating manual errors and repetitive calculations. Designed for retail and wholesale businesses, it enhances productivity while ensuring smooth transactions.",
      website: "https://order-calculation-app.web.app/",
      keywords: ["Order Management", "React", "Firebase", "HTML", "CSS", "JavaScript", "UI/UX Design", "Business Tool"],
      images: ["/Ord-C.jpg", "/Ord-C.jpg", "/Ord-C.jpg"],
      role: "Full-stack Developer & UI/UX Designer",
      toolsUsed: [
        { name: "React", icon: <SiReact className="text-blue-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
        { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
        { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
      ],
      keyFeatures: ["Real-time order calculation", "Firebase integration", "User-friendly interface", "Inventory management", "Order history"],
      challenges: "Handling real-time data synchronization and ensuring accurate calculations.",
      solution: "Integrated Firebase Firestore for real-time data updates and implemented validation checks for accurate calculations."
    }
  ],
  "Videography": [
    { 
      id: 4,
      title: "Warna Warni Keharmonian", 
      image: "/wwk.jpg", 
      description: "A video showing Malaysia’s cultures with beautiful scenes, colorful visuals, and interesting stories to entertain and educate people.",
      details: "A multimedia project celebrating Malaysia’s rich cultural diversity through a combination of storytelling, photography, and videography. Created with Adobe Premiere Pro and After Effects, this project presents a vibrant narrative that explores the traditions, festivals, and lifestyles of various ethnic communities in Malaysia. The video features high-quality visuals, smooth transitions, and immersive sound design, capturing the essence of cultural harmony. With a blend of informative and artistic elements, the project aims to educate, inspire, and promote unity among Malaysians through engaging digital storytelling.",
      youtube: ["https://www.youtube.com/embed/0cinXpffBgY?si=MGZlTXGVNu3o7uDi", "https://www.youtube.com/embed/AqjiNCVW6rQ?si=p_hA3oi_4pCPpI1M"],
      keywords: ["Cultural Video", "Videography", "Editing", "Malaysia Heritage", "Storytelling", "Cinematic"],
      images: ["/wwk.jpg"],
      role: "Scriptwriter, Video Editor, Sound Director, Presenter",
      toolsUsed: [
        { name: "After Effects", icon: <FaCode  className="text-purple-500" /> },
        { name: "Adobe Audition", icon: <FaCode  className="text-blue-500" /> },
        { name: "Adobe Illustrator", icon: <SiAdobeillustrator className="text-orange-500" /> },
        { name: "Premiere Pro", icon: <FaCode  className="text-blue-600" /> },
        { name: "iPhone 13 (Apple)", icon: <SiApple className="text-gray-500" /> },
      ],
      keyFeatures: ["Cultural storytelling", "Cinematic visuals", "Smooth transitions", "Engaging narratives", "High-quality editing"],
      challenges: "Managing large video files and ensuring smooth playback across devices.",
      solution: "Optimized video compression and used professional editing tools (Adobe Premiere Pro, After Effects) for seamless playback."
    },
    { 
      id: 5,
      title: "Horror Ads: Corridor", 
      image: "/corridor.jpg", 
      description: "A short horror ad with spooky scenes and scary moments to give viewers an exciting and thrilling experience.",
      details: "A short horror advertisement designed to captivate audiences with suspenseful scenes, eerie sound design, and immersive storytelling. Created using Adobe Premiere Pro and After Effects, this video uses cinematic effects, color grading, and green screen compositing to enhance the chilling atmosphere. The ad follows a tense storyline where an unsuspecting character experiences paranormal events in a dimly lit corridor, keeping viewers on edge. By combining dramatic pacing, jump scares, and unsettling audio effects, it delivers a gripping horror experience within a short timeframe, perfect for promotional campaigns.",
      youtube: ["https://www.youtube.com/embed/T_HfEtxfWUY?si=Hg7ELG33a-pX0fRH"],
      keywords: ["Horror Short Film", "Thriller", "Cinematic Storytelling", "Video Editing", "Sound Design", "Green Screen Effects"],
      images: ["/horro-ads-corridor.jpg", "/horro-ads-corridor.jpg", "/horro-ads-corridor.jpg"],
      role: "Video Editor, Typographer & Audio Director",
      toolsUsed: [
        { name: "Premiere Pro", icon: <FaCode  className="text-blue-600" /> },
        { name: "After Effects", icon: <FaCode  className="text-purple-500" /> },
        { name: "Sound Design", icon: <FaVolumeUp className="text-gray-500" /> }
      ],
      keyFeatures: ["Suspenseful storytelling", "Eerie sound design", "Green screen effects", "Cinematic visuals", "Short format"],
      challenges: "Creating realistic horror effects and maintaining a suspenseful atmosphere.",
      solution: "Used advanced editing techniques in Adobe Premiere Pro and After Effects, along with professional sound design tools."
    },
    { 
      id: 6,
      title: "Product Advertisement: Sugarbomb Perfume", 
      image: "/sugarbomb.jpg", 
      description: "A stylish video promoting Sugarbomb Perfume with smooth shots, cool effects, and eye-catching visuals to attract customers.",
      details: "A visually stunning promotional video for Sugarbomb Perfume, highlighting the product’s elegance and appeal. Produced with Adobe Premiere Pro and After Effects, the ad features smooth cinematography, dynamic transitions, and eye-catching animations that emphasize the luxurious feel of the fragrance. The video showcases close-up shots of the perfume bottle, artistic light effects, and engaging motion graphics, creating a high-end branding experience. Designed for social media and digital marketing, the advertisement captures the essence of sophistication, style, and desirability, making it irresistible to potential customers.",
      youtube: ["https://www.youtube.com/embed/ACm_mV3SYtA?si=9NUQEcZBl4OrzSVk"],
      keywords: ["Product Advertising", "Commercial Video", "Brand Marketing", "Visual Storytelling"],
      images: ["/product-advertisement-sugarbomb-perfume.jpg", "/product-advertisement-sugarbomb-perfume.jpg", "/product-advertisement-sugarbomb-perfume.jpg"],
      role: "Cameraman & Video Editor",
      toolsUsed: [
        { name: "Premiere Pro", icon: <FaCode  className="text-blue-600" /> },
        { name: "After Effects", icon: <FaCode  className="text-purple-500" /> },
        { name: "Adobe Illustrator", icon: <SiAdobeillustrator className="text-orange-500" /> },
        { name: "Redmi Note 9s Camera", icon: <FaCamera className="text-gray-500" /> },
        { name: "Lighting Equipment", icon: <FaLightbulb className="text-yellow-500" /> },
      ],
      keyFeatures: ["Stylish visuals", "Smooth transitions", "Eye-catching effects", "Brand storytelling", "High-quality production"],
      challenges: "Highlighting the product’s elegance while keeping the video engaging.",
      solution: "Focused on smooth camera movements, vibrant color grading, and dynamic transitions to create a visually appealing ad."
    }
  ],
  "AR/VR": [
    { 
      id: 7, 
      title: "Interactive Malacca AR", 
      image: "/interactive-malacca-ar.jpg", 
      description: "An AR app that helps users explore Malacca’s historical sites with 3D models, fun facts, and interactive features.",
      details: "An augmented reality (AR) mobile application that brings Malacca’s historical sites to life through 3D models, interactive features, and informative pop-ups. Developed using Unity and ARCore, the app allows users to explore famous landmarks in an immersive and educational way. By scanning locations with their mobile devices, users can access historical facts, virtual tours, and interactive elements that enhance their learning experience. The project aims to preserve heritage and promote tourism while making history engaging through modern AR technology. It’s ideal for students, tourists, and history enthusiasts.",
      youtube: ["https://www.youtube.com/embed/J8J_IUi3qX4?si=dAChE9i3aLxgDRw3", "https://www.youtube.com/embed/VwiEwmgtuYM?si=jatjifms4SwQ4q3t"],
      keywords: ["Augmented Reality", "Unity", "Blender", "Vuforia", "ARCore", "3D Models", "Historical Exploration"],
      images: ["/interactive-malacca-ar.jpg", "/interactive-malacca-ar.jpg", "/interactive-malacca-ar.jpg"],
      role: "AR Developer",
      toolsUsed: [
        { name: "Unity", icon: <SiUnity className="text-gray-500" /> },
        { name: "Blender", icon: <SiBlender className="text-orange-600" /> },
        { name: "ARCore", icon: <FaCode  className="text-green-500" /> }, // Custom icon or placeholder
      ],
      keyFeatures: ["Augmented reality", "3D models", "Interactive learning", "Historical facts", "Immersive experience"],
      challenges: "Integrating ARCore and ensuring smooth performance on mobile devices.",
      solution: "Optimized 3D models and used ARCore’s tracking capabilities to deliver a seamless AR experience."
    },
    { 
      id: 8, 
      title: "Planet Gallery VR", 
      image: "/planet-gallery-vr.jpg", 
      description: "A virtual reality experience guiding users through the solar system with stunning visuals, interactive learning, and immersive exploration.",
      details: "A virtual reality (VR) experience that takes users on an interactive tour of the solar system, offering breathtaking visuals and real-time planetary data. Developed with Unity and Unreal Engine, the project allows users to explore realistic 3D models of planets, moons, and space phenomena while learning about their characteristics. The immersive environment features smooth navigation, interactive learning panels, and engaging voice narration, making it perfect for astronomy enthusiasts, students, and educators. This VR experience blends education and entertainment, creating a captivating journey through space.",
      youtube: ["https://www.youtube.com/embed/BDJpSNRWB88?si=eAwMtvq15IbcjlAy"],
      keywords: ["Virtual Reality", "Unreal Engine", "Solar System Exploration", "Immersive Learning"],
      images: ["/planet-gallery-vr.jpg", "/planet-gallery-vr.jpg", "/planet-gallery-vr.jpg"],
      role: "3D Modeler & VR Developer",
      toolsUsed: [
        { name: "Unreal Engine", icon: <SiUnrealengine className="text-blue-600" /> },
        { name: "Blender", icon: <SiBlender className="text-orange-600" /> },
        { name: "Oculus Rift", icon: <FaCode  className="text-gray-500" /> },
      ],
      keyFeatures: ["Virtual reality", "Solar system exploration", "Interactive learning", "Stunning visuals", "Immersive storytelling"],
      challenges: "Creating realistic planetary visuals and ensuring smooth VR performance.",
      solution: "Used Unity and Unreal Engine to optimize 3D assets and implement smooth VR interactions."
    },
    { 
      id: 9, 
      title: "CGI: UTeM Canselor Hall", 
      image: "/cgi-utem-canselor-hall.jpg", 
      description: "A realistic 3D-rendered model showcasing UTeM’s Canselor Hall for presentations, marketing, and architectural visualization with detailed accuracy.",
      details: "A highly detailed 3D-rendered model of UTeM’s Canselor Hall, designed for presentations, marketing, and virtual walkthroughs. Created using Blender and Unity, the project accurately represents the architectural structure with realistic textures, lighting, and spatial proportions. The model serves as a visualization tool for event planning, academic promotions, and architectural studies. With high-resolution rendering and interactive camera movements, it provides an in-depth look at the hall’s design. This CGI project is ideal for university marketing, project presentations, and virtual reality applications.",
      youtube: ["https://www.youtube.com/embed/xLim6oPhVn4?si=TkYjbBsWvwCo9vFM"],
      keywords: ["3D Rendering", "Microsoft Visual Studio", "C++", "Marketing", "Presentations"],
      images: ["/cgi-utem-canselor-hall.jpg", "/cgi-utem-canselor-hall.jpg", "/cgi-utem-canselor-hall.jpg"],
      role: "Developer & Group Leader",
      toolsUsed: [
        { name: "Microsoft Visual Studio", icon: <FaCode   className="text-blue-500" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
      ],
      keyFeatures: ["3D rendering", "Architectural visualization", "High-detail models", "Realistic lighting", "Promotional tool"],
      challenges: "Achieving realistic lighting and textures for the 3D model.",
      solution: "Used Blender for high-quality rendering and Unity for realistic lighting effects."
    }
  ],
  "Standalone Applications": [
    { 
      id: 10, 
      title: "Takoyaki UTeM Order Management System", 
      image: "/takoutem.jpg", 
      description: "A C++ command-line application designed to efficiently handle orders, manage inventory, and streamline sales operations for Takoyaki UTeM vendors.",
      details: "A C++ command-line application designed to help Takoyaki UTeM vendors manage orders and track inventory efficiently. The system allows users to add, modify, and delete orders, automatically calculating totals and keeping track of available stock. With structured menu navigation and error handling, the system ensures smooth operation for vendors. It also includes a sales report generator, providing insights into daily transactions. The project simplifies order processing and reduces manual workload, making it a valuable tool for small food businesses.",
      keywords: ["C++", "Standalone Application", "Order Management", "Inventory Management"],
      images: ["/takoutem.jpg", "/takoutem1.jpg", "/takoutem3.jpg", "/takoutem4.jpg", "/takoutem5.jpg"],
      role: "Developer",
      toolsUsed: [
        { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
        { name: "Command-line interface", icon: <FaTerminal className="text-gray-500" /> },
      ],
      keyFeatures: ["Order management", "Inventory tracking", "Sales reporting", "Command-line interface", "Efficient operations"],
      challenges: "Handling complex order and inventory data in a command-line interface.",
      solution: "Implemented a structured data management system using C++ to ensure accurate and efficient operations."
    },
    { 
      id: 11, 
      title: "Helmet Charter System", 
      image: "/helmet-charter-system.jpg", 
      description: "A Java-based application encouraging helmet safety awareness through interactive fit testing, informative guidelines, and road safety educational content.",
      details: "A Java-based application promoting helmet safety awareness through interactive fit testing and educational content. Developed using Eclipse IDE, the system allows users to input head measurements, receive helmet size recommendations, and access road safety guidelines. It also features interactive quizzes and safety tips to educate riders on proper helmet usage. Designed with a simple and intuitive UI, the project aims to enhance road safety awareness and encourage responsible riding habits. Ideal for motorcycle riders, safety campaigns, and educational institutions.",
      youtube: ["https://www.youtube.com/embed/tjNLR3sNwS4?si=l_YUZkH48Fg2YgLK"],
      keywords: ["Java", "Standalone Application", "Helmet Safety", "Charter Management", "Interactive Fit Testing"],
      images: ["/helmet-charter-system.jpg", "/helmet-charter-system.jpg", "/helmet-charter-system.jpg"],
      role: "Developer & Group Leader",
      toolsUsed: [
        { name: "Java", icon: <FaCode  className="text-red-500" /> },
        { name: "Eclipse IDE", icon: <FaCode  className="text-purple-500" /> },
      ],
      keyFeatures: ["Helmet safety awareness", "Interactive fit testing", "Educational content", "Road safety guidelines", "User-friendly interface"],
      challenges: "Ensuring accurate fit testing and user engagement.",
      solution: "Developed interactive Java-based algorithms for fit testing and included engaging educational content."
    }
  ],
  "Games": [
    { 
      id: 12, 
      title: "Multiplatform Game: Dedalo", 
      image: "/multiplatform-game-dedalo.jpg", 
      description: "A puzzle-adventure game available on multiple platforms, featuring challenging levels, intriguing storytelling, and engaging gameplay mechanics for players.",
      details: "A challenging puzzle-adventure game available on multiple platforms, featuring mind-bending mazes and engaging storytelling. Developed with Unity and C#, Dedalo offers players complex puzzles, atmospheric visuals, and a mysterious narrative. Players navigate through intricate labyrinths, solve logic-based challenges, and uncover hidden secrets. The game features smooth controls, immersive sound design, and a gripping storyline, making it an exciting experience for casual gamers and puzzle enthusiasts. With cross-platform compatibility, Dedalo provides an engaging gameplay experience on PC, mobile, and consoles.",
      youtube: ["https://www.youtube.com/embed/rl3Ec4jODgM?si=IQXrwaMHkYGtSNcm"],
      keywords: ["Unity", "Game Development", "Puzzle-Adventure", "Multi-Platform", "Storytelling", "Challenging Levels"],
      images: ["/multiplatform-game-dedalo.jpg", "/multiplatform-game-dedalo.jpg", "/multiplatform-game-dedalo.jpg"],
      role: "Game Mechanic Developer & Group Leader",
      toolsUsed: [
        { name: "Unity", icon: <SiUnity className="text-gray-500" /> },
        { name: "C#", icon: <SiCplusplus className="text-purple-500" /> },
        { name: "Blender", icon: <SiBlender className="text-orange-600" /> },
      ],
      keyFeatures: ["Puzzle-adventure gameplay", "Cross-platform support", "Challenging levels", "Immersive storytelling", "Engaging mechanics"],
      challenges: "Designing challenging yet solvable puzzles and ensuring cross-platform compatibility.",
      solution: "Used Unity’s cross-platform capabilities and playtested extensively to balance puzzle difficulty."
    },
    { 
      id: 13, 
      title: "2D Game: Hungry Monkey", 
      image: "/2d-game-hungry-monkey.jpg", 
      description: "A fun 2D platformer where players help a monkey collect fruits while dodging various obstacles and enemies in vibrant environments.",
      details: "A fun and engaging 2D platformer where players control a monkey collecting fruits while avoiding obstacles. Built with Unity and C#, the game features colorful graphics, smooth animations, and addictive gameplay mechanics. Players must navigate through various levels, jump over obstacles, dodge enemies, and collect rewards to progress. The game includes multiple difficulty levels, power-ups, and a scoring system to keep players engaged. Designed for casual gamers and children, Hungry Monkey provides a fun, interactive, and skill-building experience with simple yet entertaining gameplay.",
      youtube: ["https://www.youtube.com/embed/GiI0z2HWdiY?si=G8V56KBQaVZeghYQ"],
      keywords: ["Unity", "Game Development", "2D Platformer", "Fruit Collection", "Obstacle Avoidance"],
      images: ["/2d-game-hungry-monkey.jpg", "/2d-game-hungry-monkey.jpg", "/2d-game-hungry-monkey.jpg"],
      role: "Game Designer & Developer",
      toolsUsed: [
        { name: "Unity", icon: <SiUnity className="text-gray-500" /> },
        { name: "C#", icon: <SiCplusplus className="text-purple-500" /> },
        { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-500" /> },
      ],
      keyFeatures: ["2D platformer", "Fruit collection", "Obstacle avoidance", "Vibrant environments", "Addictive gameplay"],
      challenges: "Creating smooth controls and engaging level design.",
      solution: "Implemented responsive controls in Unity and designed levels with increasing difficulty to keep players engaged."
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
              className="relative p-6 rounded-lg cursor-pointer transition-all duration-500 bg-gray-800 flex flex-col h-full"
              initial={{ boxShadow: "0px 0px 5px rgba(255, 255, 255, 0.2)" }}
              whileHover={{ boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.8)", scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => setExpandedProject(project)}
            >
              {/* Image Section */}
              <div className="relative w-full aspect-[5/3] overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>

              {/* Project Title */}
              <h3 className="text-xl text-start font-semibold mt-4 text-gray-200">{project.title}</h3>

              {/* Description */}
              <motion.p 
                className="text-gray-100 mt-2 text-start flex-grow"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {project.description}
              </motion.p>

              {/* Click to Expand Text */}
              <p className="my-5 font-semibold hover:underline text-[13px]">Click to expand</p>

              {/* Keyword Badges */}
              <div className="flex flex-wrap gap-2">
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

      {/* Full-Screen Expanded Project View */}
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
                    <div key={index} className="w-full md:w-[48%] lg:w-[30%] aspect-video">
                      <iframe
                        src={link}
                        title={`YouTube video ${index + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full rounded-lg"
                      ></iframe>
                    </div>
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
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-lg"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}

              {/* Website Link */}
              {expandedProject.website && (
                <div className="my-10">
                  <a 
                    href={expandedProject.website} 
                    target="_blank" 
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Visit Website
                  </a>
                </div>
              )}

              <div className="project-details my-10 text-start mx-12">
                <h3 className="text-2xl font-bold mb-5">Project Details</h3>
                <ul>
                  <li className="mb-5">
                    <span className="font-bold">Project Name:</span> {expandedProject.title}
                  </li>
                  <li className="mb-5">
                    <span className="font-bold">Role:</span> {expandedProject.role}
                  </li>
                  <li className="mb-5">
                    <span className="font-bold">Project Details:</span><br /> 
                    <span>{expandedProject.details}</span>
                  </li>
                  <li className="mb-5">
                    <span className="font-bold">Tools Used:</span>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {expandedProject.toolsUsed?.map((tool, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 text-sm font-semibold text-white rounded-full bg-gray-600 hover:scale-105 hover:shadow-md flex items-center gap-2"
                        >
                          {tool.icon} {/* Render the icon */}
                          {tool.name} {/* Render the tool name */}
                        </span>
                      ))}
                    </div>
                  </li>
                  <li className="mb-5">
                    <span className="font-bold">Key Features:</span>
                    <ul className="ml-4 mt-2 space-y-2">
                      {expandedProject.keyFeatures?.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 leading-tight">
                          <FaChevronCircleDown className="text-purple-500" /> {/* Icon */}
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="mb-5">
                    <span className="font-bold">Challenges:</span> {expandedProject.challenges}
                  </li>
                  <li className="mb-5">
                    <span className="font-bold">Solution:</span> {expandedProject.solution}
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-Size Image Modal */}
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