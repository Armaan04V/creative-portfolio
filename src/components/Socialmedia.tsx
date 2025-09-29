import { motion } from "framer-motion";

import m1 from "@/assets/m1.png";
import m2 from "@/assets/m2.png";
import m3 from "@/assets/m3.png";
import m4 from "@/assets/m4.png";
import m5 from "@/assets/m5.png";
import m6 from "@/assets/m6.png";
import m7 from "@/assets/m7.png";
import m8 from "@/assets/m8.png";
import m9 from "@/assets/m9.png";
import m10 from "@/assets/m10.png";
import m11 from "@/assets/m11.png";
import m12 from "@/assets/m12.png";
import m13 from "@/assets/m13.png";
import m14 from "@/assets/m14.png";
import m15 from "@/assets/m15.png";
import m16 from "@/assets/m16.png";
import m17 from "@/assets/m17.png";
import m18 from "@/assets/m18.png";
import m19 from "@/assets/m19.png";
import m20 from "@/assets/m20.png";
import m21 from "@/assets/m21.png";

const images = [
  m1, m2, m3, m4, m5, m6, m7, m8, m9, m10,
  m11, m12, m13, m14, m15, m16, m17, m18, m19, m20, m21,
];

const SocialGrid: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 py-24 px-16">
      <div className="max-w-8xl mx-auto text-center mb-20">
        <h1 className="text-6xl font-extrabold mb-4 text-gray-900 tracking-tight">
          Social Media Mockups
        </h1>
        <div className="mx-auto mb-8 h-1 w-32 bg-gradient-to-r from-green-700 to-green-900 rounded"></div>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed tracking-wide">
          Discover a handpicked collection of vibrant social media mockups designed to showcase your brand’s creativity and style. Perfect for presentations, portfolios, and marketing campaigns.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 max-w-[1400px] mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="overflow-hidden rounded-xl cursor-pointer shadow-md bg-white"
            whileHover={{ scale: 1.1, boxShadow: "0 20px 30px rgba(99, 102, 241, 0.3)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={img}
              alt={`Mockup ${i + 1}`}
              className="w-full aspect-[4/5] object-cover rounded-xl"
              draggable={false}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SocialGrid;
