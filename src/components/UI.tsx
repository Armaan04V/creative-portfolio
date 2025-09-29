import { motion } from "framer-motion";
import uiImage from "@/assets/ui.png";

const UI: React.FC = () => {
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

        {/* Image Section with framer-motion hover scale */}
        <motion.img
          src={uiImage}
          alt="User Interface Design"
          className="w-full h-[600px] object-contain transition-transform duration-700"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </section>
  );
};

export default UI;
