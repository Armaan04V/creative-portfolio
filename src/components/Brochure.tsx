import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import brochure images
import a1 from "@/assets/a1.jpg";
import a2 from "@/assets/a2.jpg";
import a3 from "@/assets/a3.jpg";
import a4 from "@/assets/a4.jpg";
import a5 from "@/assets/a5.jpg";
import a6 from "@/assets/a6.jpg";
import a7 from "@/assets/a7.jpg";
import a8 from "@/assets/a8.jpg";

const brochures = [a1, a2, a3, a4, a5, a6, a7, a8];

const Brochure: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === brochures.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? brochures.length - 1 : prev - 1));
  };

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    const swipe = info.offset.x;

    if (swipe < -100) {
      nextSlide(); // Swipe left
    } else if (swipe > 100) {
      prevSlide(); // Swipe right
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-4">
      {/* Heading */}
      <div className="max-w-8xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 tracking-tight">
          Brochure Gallery
        </h2>
        <div className="mx-auto mb-8 h-1 w-32 bg-green-800 rounded"></div>
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed tracking-wide">
          A curated collection of brochure designs showcasing a range of layouts, styles, and brand identities.
        </p>
      </div>

      {/* Slider Wrapper */}
      <div className="relative w-full max-w-5xl">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl bg-black flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={brochures[current]}
              alt={`Brochure ${current + 1}`}
              className="max-h-full max-w-full object-contain"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3}}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
            />
          </AnimatePresence>
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 sm:-left-8 -translate-y-1/2 bg-white shadow-lg hover:bg-gray-200 text-gray-800 p-2 sm:p-4 rounded-full transition z-30"
        >
          ❮
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 sm:-right-8 -translate-y-1/2 bg-white shadow-lg hover:bg-gray-200 text-gray-800 p-2 sm:p-4 rounded-full transition z-30"
        >
          ❯
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-3 mt-6 flex-wrap justify-center">
        {brochures.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition ${
              i === current ? "bg-gray-800 scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Brochure;
  