import { useEffect, useState } from "react";

import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.jpg";
import img7 from "@/assets/7.jpg";
import img8 from "@/assets/8.jpg";
import img9 from "@/assets/9.jpg";

const logos = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const LogosGallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.querySelector("#gallery");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="min-h-screen bg-white py-24 px-16">
      <div className="max-w-8xl mx-auto text-center mb-20">
        <h2 className="text-6xl font-extrabold mb-4 text-gray-900 tracking-tight">
          Logo Gallery
        </h2>
        <div className="mx-auto mb-8 h-1 w-32 bg-green-800 rounded"></div>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed tracking-wide">
          A curated showcase of unique logo designs, crafted with creativity and precision to represent different brands.
        </p>
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="relative rounded-3xl overflow-hidden cursor-pointer group"
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-full h-64 object-cover rounded-3xl transition-transform duration-500 ease-in-out filter group-hover:brightness-75 group-hover:scale-110"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogosGallery;
