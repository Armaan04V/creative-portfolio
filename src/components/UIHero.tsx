import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroBackground from "@/assets/hero-background.jpg";

const UIHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="package-hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Main Heading */}
        <motion.h1
          className="relative text-6xl md:text-8xl lg:text-[10rem] font-extrabold text-white tracking-tight inline-block z-20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.5, ease: "easeOut" }}
        >
          User Interface
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default UIHero;
