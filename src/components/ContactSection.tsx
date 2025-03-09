"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa"; // Import new icons
import { FaXTwitter } from "react-icons/fa6";  // ✅ This is the correct import

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 text-center text-gray-100 bg-[#0E0D0E]">
      <div className="container mx-auto max-w-4xl" >
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-300 mb-8">Feel free to reach out for collaborations or just a friendly chat!</p>

        <motion.form 
          className="relative p-6 rounded-lg cursor-pointer transition-all duration-500"
          style={{
            // backgroundColor: "rgba(237, 213, 255, 0.2)", // Light pastel purple background
            boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)", // Soft white glow
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-purple-100 text-black border border-gray-600 focus:outline-none focus:border-purple-400" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-purple-100 text-black border border-gray-600 focus:outline-none focus:border-purple-400" />
          </div>
          <div className="mb-4">
            <textarea rows={4} placeholder="Your Message" className="w-full p-3 rounded-lg bg-purple-100 text-black border border-gray-600 focus:outline-none focus:border-purple-400"></textarea>
          </div>
          <button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
            Send Message
          </button>
        </motion.form>

        {/* Social Media Links with Icons */}
        <div className="flex justify-center gap-6 mt-15">
          <motion.a 
            href="https://linkedin.com" 
            target="_blank" 
            className="text-purple-400 hover:text-blue-600 transition duration-300"
            whileHover={{ scale: 1.2, color: "#a855f7" }}
          >
            <FaLinkedin size={30} />
          </motion.a>

          <motion.a 
            href="https://github.com/ariezaziera" 
            target="_blank" 
            className="text-purple-400 hover:text-purple-600 transition duration-300"
            whileHover={{ scale: 1.2, color: "#a855f7" }}
          >
            <FaGithub size={30} />
          </motion.a>

          <motion.a 
            href="https://twitter.com" 
            target="_blank" 
            className="text-purple-400 hover:text-purple-600 transition duration-300"
            whileHover={{ scale: 1.2, color: "#a855f7" }}
          >
            <FaXTwitter size={30} />
          </motion.a>

          <motion.a 
            href="https://facebook.com" 
            target="_blank" 
            className="text-blue-400 hover:text-blue-600 transition duration-300"
            whileHover={{ scale: 1.2, color: "#1877F2" }} // Facebook blue
          >
            <FaFacebook size={30} />
          </motion.a>

          <motion.a 
            href="https://youtube.com" 
            target="_blank" 
            className="text-red-400 hover:text-red-600 transition duration-300"
            whileHover={{ scale: 1.2, color: "#FF0000" }} // YouTube red
          >
            <FaYoutube size={30} />
          </motion.a>

          <motion.a 
            href="https://instagram.com" 
            target="_blank" 
            className="text-pink-400 hover:text-pink-600 transition duration-300"
            whileHover={{ scale: 1.2, color: "#E1306C" }} // Instagram pink
          >
            <FaInstagram size={30} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
