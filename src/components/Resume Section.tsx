"use client";

import { motion } from "framer-motion";
import { FaDownload, FaBriefcase, FaGraduationCap, FaCalendarAlt, FaUserTie } from "react-icons/fa";
import Image from "next/image";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiFigma, SiFramer, SiGit, SiVercel } from "react-icons/si";

// ✅ Experiences Data
const experiences = [
  {
    role: "Business Analyst",
    company: "Cinergi",
    duration: "2025 - Present",
    logo: "/logoUTeM.png",
    description: "lorem ipsum",
  },
  {
    role: "Multimedia Intern",
    company: "Prepaid Technologies Sdn Bhd",
    duration: "Oct 2024 - Mar 2025",
    logo: "/logoUTeM.png",
    description: "lorem ipsum",
  },
];

// ✅ Education Data
const education = [
  {
    degree: "Bachelor of Computer Science (Interactive Media)",
    institution: "Your University Name",
    duration: "2020 - 2025",
    logo: "/logoUTeM.png",
  },
  {
    degree: "Bachelor of Computer Science (Interactive Media)",
    institution: "Your University Name",
    duration: "2020 - 2025",
    logo: "/utem-logo.png",
  },
  {
    degree: "Bachelor of Computer Science (Interactive Media)",
    institution: "Your University Name",
    duration: "2020 - 2025",
    logo: "/utem-logo.png",
  },
];

// ✅ Skill Level Labels
const getSkillLevel = (percentage: number) => {
  if (percentage >= 90) return "Expert";
  if (percentage >= 75) return "Advanced";
  if (percentage >= 60) return "Intermediate";
  return "Beginner";
};

const categorizedSkills = {
  "Programming & Development": [
    { name: "HTML", level: 90, icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS", level: 85, icon: <SiCss3 className="text-blue-500" /> },
    { name: "JavaScript", level: 80, icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", level: 75, icon: <SiReact className="text-blue-300" /> },
    { name: "Next.js", level: 70, icon: <SiNextdotjs className="text-white" /> },
  ],
  "UI/UX & Design": [
    { name: "Figma", level: 85, icon: <SiFigma className="text-pink-400" /> },
    { name: "Framer Motion", level: 70, icon: <SiFramer className="text-purple-500" /> },
  ],
  "Tools & Technologies": [
    { name: "Git", level: 80, icon: <SiGit className="text-red-500" /> },
    { name: "Vercel", level: 75, icon: <SiVercel className="text-gray-300" /> },
  ],
};

const ResumeSection = () => {
  const skillCategories = Object.entries(categorizedSkills);
  const isOdd = skillCategories.length % 2 !== 0;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center text-center py-16 px-6"
    >
      <h2 className="text-3xl font-bold text-gray-200 mb-8">My Resume</h2>

      {/* 🔹 Download Resume Button (Enhanced) */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 relative group cursor-pointer mb-15"
      >
        {/* Glowing Effect */}
        <motion.div 
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-purple-500 rounded-lg blur-lg opacity-70 group-hover:opacity-100"
        ></motion.div>

        {/* Main Button */}
        <a
          href="/resume.pdf"
          download="Arieza_Aziera_Resume.pdf"
          className="relative z-10 flex items-center gap-3 px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg shadow-lg transition-all group-hover:bg-purple-700"
        >
          <FaDownload className="text-xl animate-bounce" />
          <span className="text-lg">Download My Resume</span>
        </a>
      </motion.div>

      {/* ✅ Responsive Flexbox Container */}
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">

        {/* 🟣 Experience Section */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-300 flex items-center gap-2">
            <FaBriefcase className="text-purple-400" /> Experience
          </h3>

          <div className="mt-6 relative border-l-4 border-purple-500 pl-6 space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.4)" }}
                className="relative bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-7 top-6 w-4 h-4 bg-purple-500 rounded-full border-2 border-gray-900"></div>

                {/* 🟢 Mobile-Friendly Layout */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  {/* Logo */}
                  <div className="w-12 h-12 flex-shrink-0 flex items-center">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} Logo`}
                      width={64}
                      height={64}
                      className="object-contain rounded-md"
                    />
                  </div>

                  {/* Details */}
                  <div className="text-center md:text-left">
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      {exp.role} <FaUserTie className="text-gray-400" />
                    </h4>
                    <p className="text-gray-400">{exp.company}</p>
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                      <FaCalendarAlt className="text-gray-400" /> {exp.duration}
                    </p>
                    <p className="mt-3 text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🟠 Vertical Divider for Desktop */}
        <div className="hidden md:block w-0.5 bg-gray-500 opacity-50"></div>

        {/* 🟠 Education Section */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-300 flex items-center gap-2">
            <FaGraduationCap /> Education
          </h3>

          <div className="mt-6 relative border-l-4 border-purple-500 pl-6 space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.4)" }}
                className="relative bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-7 top-6 w-4 h-4 bg-purple-500 rounded-full border-2 border-gray-900"></div>

                {/* 🟢 Mobile-Friendly Layout */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  {/* Logo */}
                  <div className="w-12 h-12 flex-shrink-0 flex items-center">
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} Logo`}
                      width={64}
                      height={64}
                      className="object-contain rounded-md"
                    />
                  </div>

                  {/* Details */}
                  <div className="text-center md:text-left">
                    <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                    <p className="text-gray-400">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.duration}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Skills Section */}
      <motion.section 
        id="skills"
        className="w-full flex flex-col items-center text-center mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full max-w-4xl">
          <h3 className="text-2xl font-semibold text-gray-300">🚀 Skills</h3>

          {/* Skill Categories Grid */}
          <div className="flex flex-wrap justify-center mt-6 gap-8">
            {skillCategories.map(([category, skills], index) => (
              <div
                key={category}
                className={`relative w-full md:w-[48%] ${isOdd && index === skillCategories.length - 1 ? "md:w-[60%]" : ""}`}
              >
                {/* Title */}
                <h4 className="text-xl font-bold text-purple-400">{category}</h4>

                {/* Skills Grid */}
                <div className="grid-cols-3 sm:grid-cols-3 gap-6 mt-4 flex flex-wrap justify-center">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.1, rotate: 2, boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.4)" }}
                      className="flex flex-col items-center text-white text-xs sm:text-sm font-semibold bg-gray-800 p-3 sm:p-4 rounded-lg shadow-lg w-32 sm:w-40"
                      >
                      <motion.div className="text-3xl">{skill.icon}</motion.div>
                      <span className="mt-2">{skill.name}</span>

                      {/* Progress Bar with Label */}
                      <div className="w-full mt-3">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                          className="h-2 bg-gray-700 rounded-full overflow-hidden"
                        >
                          <div className="h-full bg-purple-500"></div>
                        </motion.div>
                        <p className="text-xs text-gray-400 mt-1">
                          {skill.level}% - {getSkillLevel(skill.level)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* ✅ Vertical Divider for Desktop */}
                {index % 2 === 0 && index !== skillCategories.length - 1 && (
                  <div className="hidden md:block absolute top-0 right-[-4%] h-full w-1 bg-gray-600 opacity-40"></div>
                )}

                {/* ✅ Horizontal Divider for Mobile */}
                {index !== skillCategories.length - 1 && (
                  <div className="block md:hidden my-6 h-[2px] bg-gray-600 opacity-40"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.section>
  );
};

export default ResumeSection;