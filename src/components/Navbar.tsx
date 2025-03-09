"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav 
      className="fixed top-0 left-0 w-full bg-[#0E0D0E] text-white py-4 px-6 z-50 shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#home">
          <Image 
            src="/logo.png" 
            alt="My Logo" 
            width={150} 
            height={50} 
            className="h-12 w-auto"
          />
        </a>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-2xl"
        >
          ☰
        </button>

        {/* ✅ Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 w-full bg-[#0E0D0E] text-center py-4 shadow-lg md:hidden"
            >
              {["About", "Projects", "Contact"].map((item) => (
                <motion.li 
                  key={item} 
                  className="py-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* ✅ Desktop Navigation with Hover Animation */}
        <ul className="hidden md:flex gap-6">
        {["About", "Projects", "Contact"].map((item) => (
            <motion.li 
            key={item} 
            className="relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            >
            <motion.a 
                href={`#${item.toLowerCase()}`} 
                className="relative text-white"
                whileHover={{ color: "#a855f7" }} // ✅ Changes text color on hover
                transition={{ duration: 0.3 }}
            >
                {item}

                {/* ✅ Underline Effect */}
                <motion.span 
                className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500 origin-left scale-x-0"
                whileHover={{ scaleX: 1 }} // ✅ Expands underline smoothly
                transition={{ duration: 0.3 }}
                ></motion.span>
            </motion.a>
            </motion.li>
        ))}
        </ul>

      </div>
    </nav>
  );
}
