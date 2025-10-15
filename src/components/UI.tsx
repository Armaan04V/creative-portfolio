import { motion } from "framer-motion";
import uiImage1 from "@/assets/ui.jpg";
import uiImage2 from "@/assets/ui2.jpg";
import uiImage3 from "@/assets/ui3.jpg";

const UI: React.FC = () => {
  const images = [
    { src: uiImage1, alt: "User Interface Design 1" },
    { src: uiImage2, alt: "User Interface Design 2" },
    { src: uiImage3, alt: "User Interface Design 3" },
  ];

  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 inline-block relative">
            User Interface
            <span className="block h-[4px] w-20 mx-auto mt-3 rounded bg-gradient-to-r from-green-700 to-green-900" />
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
            Dive into a refined collection of intuitive and visually engaging user interface designs built for seamless user experiences.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-80 object-contain rounded-lg shadow-lg transition-transform duration-700 bg-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UI;
