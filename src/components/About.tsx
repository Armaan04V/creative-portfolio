import { useEffect, useState } from 'react';
import { Award, Users, Coffee, Star } from 'lucide-react';
import designerPortrait from '@/assets/designer-portrait.png';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('#about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Users, value: '100+', label: 'Happy Clients' },
    { icon: Coffee, value: '500+', label: 'Projects Completed' },
    { icon: Star, value: '10+', label: 'Notable Collaborations' },
  ];

  return (
    <section
      id="about"
      className="py-20 relative bg-white"  // <-- Changed here, added bg-white
      // Removed the backgroundImage style
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Side (No glow) */}
          <div className={`relative ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            <div className="aspect-square rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
              <img
                src={designerPortrait}
                alt="Sorab Hans - Graphic Designer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className={`space-y-10 ${isVisible ? 'stagger-fade-in' : ''}`}>
            <div>
              <div className="mb-4">
                <span className="text-green-700 font-medium text-sm uppercase tracking-wider">
                  Designer & Creative Director
                </span>
              </div>
              <h2 className="text-4xl text-black md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                About <span className="signature text-green-700">Me</span>
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p className="text-xl font-medium">
                  I'm a passionate graphic designer with over 5 years of experience
                  creating compelling visual narratives that resonate with audiences
                  and drive brand success.
                </p>
                <p>
                  My approach combines strategic thinking with creative execution,
                  ensuring every design not only looks stunning but also serves a
                  purpose. From brand identity to digital experiences, I craft
                  solutions that make lasting impressions.
                </p>
                <p>
                  When I'm not designing, you'll find me exploring new creative
                  techniques, studying design trends, or collaborating with fellow
                  creatives to push the boundaries of visual communication.
                </p>
              </div>
            </div>

            {/* Expertise */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-black">Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Brand Identity',
                  'Logo Design',
                  'Print Design',
                  'Digital Design',
                  'UI/UX Design',
                  'Packaging Design',
                  'Typography',
                  'Illustration',
                ].map((skill) => (
                  <div
                    key={skill}
                    className="p-4 bg-gray-50 border border-gray-200 rounded-xl text-center hover:border-green-400 transition-all duration-300 group"
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-green-700 transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Philosophy */}
            <div className="p-8 bg-gray-50 border border-gray-200 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Design Philosophy</h3>
              <p className="leading-relaxed italic text-gray-700">
                "Great design is not just about making things look beautiful—it's about
                creating meaningful connections between brands and people through thoughtful,
                strategic visual communication."
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`mt-24 ${isVisible ? 'stagger-fade-in' : ''}`}>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 text-black">Professional Achievements</h3>
            <div className="w-16 h-0.5 bg-green-700 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-500 group hover:scale-105"
              >
                <div className="relative">
                  <stat.icon
                    size={52}
                    className="mx-auto mb-6 text-green-700 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-4xl font-bold text-green-700 mb-3 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-gray-700 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
