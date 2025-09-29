import { motion } from "framer-motion";

import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.webp";
import p8 from "@/assets/p8.webp";
import p9 from "@/assets/p9.jpg";
import p10 from "@/assets/p10.jpg";

const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

const PackagingPuzzle: React.FC = () => {
  return (
    <section className="bg-white py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Packaging Mockups
        </h1>
        <div className="mx-auto mb-8 h-1 w-32 bg-gradient-to-r from-green-700 to-green-900 rounded"></div>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Explore a refined collection of high-quality packaging mockups in a dynamic layout that adapts to your screen.
        </p>
      </div>

      <div
        className="masonry-columns"
        style={{
          columnCount: 3,
          columnGap: "1.5rem",
        }}
      >
        {images.map((img, idx) => (
          <motion.img
            key={idx}
            src={img}
            alt={`Packaging ${idx + 1}`}
            draggable={false}
            className="w-full mb-6 break-inside-avoid-column rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>
    </section>
  );
};

export default PackagingPuzzle;
