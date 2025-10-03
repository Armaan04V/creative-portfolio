import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroBackground from "@/assets/hero-background.jpg";
import TrueFocus from "./ui/TrueFocus";

const BrochureHero = () => {
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
        {/* Animated TrueFocus Heading */}
        <TrueFocus
          sentence="Brochure Design"
          manualMode={false}
          blurAmount={5}
          borderColor="green"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </motion.div>
    </section>
  );
};

export default BrochureHero;
