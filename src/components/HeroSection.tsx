"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      className="relative flex flex-col items-center justify-center min-h-screen text-center text-white px-6"
      style={{ backgroundImage: "url('/bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 pt-20" style={{ backgroundColor: "rgba(14, 13, 14, 0.9)" }}></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center pt-25"
      >
        <h1 className="text-5xl md:text-7xl font-bold">
        I&apos;m <span className="text-purple-400">Arieza Aziera</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mt-3">
          Full Stack Developer
        </h2>
        <p className="text-gray-400 max-w-xl mt-4">
          Passionate about building interactive and scalable web applications.
        </p>

        <div className="mt-6 flex gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition"
          >
            My Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-purple-400 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
          >
            Contact Me
          </motion.button>
        </div>
        {/* Floating Profile Image with Background Glow */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-52 h-52 mt-10"
        >
          {/* Soft Glow Effect */}
          <motion.div
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full bg-white opacity-50 blur-3xl rounded-full"
          ></motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-full h-full overflow-hidden"
          >
            <Image
              src="/profile1.png"
              alt="Profile Picture"
              width={208}
              height={208}
              className="object-cover rounded-full shadow-lg"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
