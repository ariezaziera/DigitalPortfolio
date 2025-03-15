"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Send Email
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm("service_5dzcrwa", "template_fpjrtli", e.currentTarget, "_0-oXnx2czgsqALvp")
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("Failed to send message.");
        console.error(error);
      });
  };

  // Send via WhatsApp
  const sendWhatsApp = () => {
    if (!formData.name || !formData.message) {
      alert("Please enter your name and message.");
      return;
    }

    const whatsappNumber = "60167051580"; // Replace with your WhatsApp number
    const encodedMessage = encodeURIComponent(
      `Hello, my name is ${formData.name}.\n\n${formData.message}`
    );

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 px-6 text-center text-gray-100 bg-[#0E0D0E]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-300 mb-8">Feel free to reach out for collaborations or just a friendly chat!</p>

        {/* Form */}
        <motion.form 
          onSubmit={sendEmail}
          className="relative p-6 rounded-lg transition-all duration-500"
          style={{ boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              className="w-full p-3 rounded-lg bg-purple-100 text-black border border-gray-600 focus:outline-none focus:border-purple-400"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              className="w-full p-3 rounded-lg bg-purple-100 text-black border border-gray-600 focus:outline-none focus:border-purple-400"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <textarea 
              rows={4} 
              name="message" 
              placeholder="Your Message" 
              className="w-full p-3 rounded-lg bg-purple-100 text-black border border-gray-600 focus:outline-none focus:border-purple-400"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            {/* Send Email Button */}
            <motion.button
              type="submit"
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
              whileTap={{ scale: 0.9, boxShadow: "0px 0px 12px 4px rgba(168, 85, 247, 0.8)" }}
              whileHover={{ boxShadow: "0px 0px 12px 4px rgba(168, 85, 247, 0.8)" }}
            >
              Send Email
            </motion.button>

            {/* Send WhatsApp Button */}
            <motion.button
              type="button"
              onClick={sendWhatsApp}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
              whileTap={{ scale: 0.9, boxShadow: "0px 0px 12px 4px rgba(72, 187, 120, 0.8)" }}
              whileHover={{ boxShadow: "0px 0px 12px 4px rgba(72, 187, 120, 0.8)" }}
            >
              Send WhatsApp
            </motion.button>
          </div>
        </motion.form>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-10">
          <motion.a href="https://linkedin.com/in/ariezaziera" target="_blank" rel="noopener noreferrer"
            className="text-purple-400 hover:text-blue-600 transition duration-300" whileHover={{ scale: 1.2 }}>
            <FaLinkedin size={30} />
          </motion.a>

          <motion.a href="https://github.com/ariezaziera" target="_blank" rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-600 transition duration-300" whileHover={{ scale: 1.2 }}>
            <FaGithub size={30} />
          </motion.a>

          <motion.a href="https://twitter.com/ariezaziera" target="_blank" rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-600 transition duration-300" whileHover={{ scale: 1.2 }}>
            <FaXTwitter size={30} />
          </motion.a>

          <motion.a href="https://facebook.com/ariezaziera" target="_blank" rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition duration-300" whileHover={{ scale: 1.2 }}>
            <FaFacebook size={30} />
          </motion.a>

          <motion.a href="https://youtube.com/@ariezaziera" target="_blank" rel="noopener noreferrer"
            className="text-red-400 hover:text-red-600 transition duration-300" whileHover={{ scale: 1.2 }}>
            <FaYoutube size={30} />
          </motion.a>

          <motion.a href="https://instagram.com/ariezaziera" target="_blank" rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-600 transition duration-300" whileHover={{ scale: 1.2 }}>
            <FaInstagram size={30} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
