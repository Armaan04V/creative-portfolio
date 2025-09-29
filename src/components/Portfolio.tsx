import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroBackground from "@/assets/hero-background.jpg";
import TrueFocus from "./ui/TrueFocus";

const LogoDesignHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="logo-design"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

    

      {/* Floating glowing circles */}
      <motion.div
        className="absolute top-24 left-32 w-24 h-24 rounded-full bg-primary/30 blur-2xl"
        animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-32 w-32 h-32 rounded-full bg-white/10 blur-3xl"
        animate={{ y: [0, 30, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle diagonal grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Animated TrueFocus Heading */}
        <TrueFocus
          sentence="Logo Design"
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

export default LogoDesignHero;
