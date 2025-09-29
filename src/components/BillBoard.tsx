import { motion } from "framer-motion";

// Import billboard images
import b1 from "@/assets/b1.jpg";
import b2 from "@/assets/b2.jpg";
import b3 from "@/assets/b3.jpg";

const billboards = [b1, b2, b3];

const BillBoard: React.FC = () => {
  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 inline-block relative">
            BillBoard Design
            <span className="block h-[4px] w-20 mx-auto mt-3 rounded bg-gradient-to-r from-green-700 to-green-900" />
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
            Experience striking billboard visuals tailored for dynamic, large-scale brand storytelling.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image 1 */}
          <motion.div
            className="overflow-hidden rounded-2xl shadow-xl border border-black/10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <img
              src={billboards[0]}
              alt="Billboard 1"
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            className="overflow-hidden rounded-2xl shadow-xl border border-black/10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={billboards[1]}
              alt="Billboard 2"
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Full-width Image 3 */}
          <motion.div
            className="md:col-span-2 overflow-hidden rounded-2xl shadow-xl border border-black/10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src={billboards[2]}
              alt="Billboard 3"
              className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BillBoard;
