"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer 
      className="bg-[#0E0D0E] text-white py-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Arieza Aziera. All Rights Reserved.</p>
        
        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mt-3">
          <Link href="http://www.linkedin.com/in/ariezaaziera" target="_blank" className="hover:text-blue-400 transition">LinkedIn</Link>
          <Link href="https://github.com" target="_blank" className="hover:text-gray-400 transition">GitHub</Link>
          <Link href="https://twitter.com" target="_blank" className="hover:text-blue-500 transition">Twitter</Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
