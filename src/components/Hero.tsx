import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroBackground from "@/assets/hero-background.jpg";
import handImage from "@/assets/hand.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
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
        {/* Name - moved to right */}
<motion.h2
  className="absolute top-[-80px] right-11 text-5xl md:text-6xl font-signature text-lime-400 mb-6 z-30"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
>
  Sorab Hans
</motion.h2>


        {/* Portfolio Title */}
        <motion.h1
          className="relative text-7xl md:text-9xl lg:text-[12rem] font-extrabold text-white tracking-tight inline-block z-20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.5, ease: "easeOut" }}
        >
          Portf
          <span className="relative inline-block mx-4 z-20">
            {/* Animated Glowing Orb */}
            <motion.span
              className="relative w-20 h-20 md:w-32 md:h-32 rounded-full bg-white shadow-[0_0_80px_30px_rgba(255,255,255,0.9)] inline-flex items-center justify-center z-20"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 60px 25px rgba(255,255,255,0.7)",
                  "0 0 80px 35px rgba(255,255,255,0.9)",
                  "0 0 60px 25px rgba(255,255,255,0.7)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </span>
          lio
        </motion.h1>

        {/* Hand behind orb + text */}
       <motion.img
  src={handImage}
  alt="Hand holding orb"
  className="absolute -bottom-9 left-[380px] -translate-x-1/2 w-28 md:w-[350px] z-10 hand-shadow"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1 }}
/>





        {/* Subtitle */}
        <motion.p
          className="mt-8 text-gray-300 uppercase tracking-[0.6em] font-semibold text-xl md:text-2xl z-20 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Graphic Designer
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
