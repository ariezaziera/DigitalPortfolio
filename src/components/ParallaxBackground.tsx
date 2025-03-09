"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -200]); // Moves the background

  return (
    <motion.div 
      className="absolute inset-0 bg-cover bg-center bg-fixed"
    ></motion.div>
  );
};

export default ParallaxBackground;

