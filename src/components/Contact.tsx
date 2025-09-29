import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

import heroBackground from '@/assets/hero-background.jpg';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('#contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        'service_yo0vypn',
        'template_ytbl81e',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString()
        },
        'bH8FlKKmR7fhKfLdC'
      );

      toast({
        title: 'Message Sent!',
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      // reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive',
      });
      console.error('EmailJS error:', error);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hanssorab0@gmail.com',
      href: 'mailto:hanssorab0@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 70871 49133',
      href: 'tel:+917087149133'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chandigarh, India',
      href: null
    }
  ];



  return (
    <section
      id="contact"
      className="py-20 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let's <span className="signature text-primary">Connect</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className={`space-y-8 ${isVisible ? 'stagger-fade-in' : ''}`}>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Get in Touch</h3>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with creative minds.
                Whether you have a specific project in mind or just want to chat about design,
                feel free to reach out.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center space-x-4 group">
                  <div className="p-3 bg-white/10 border border-white/20 rounded-lg group-hover:border-primary/50 transition-colors">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white hover:text-primary transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white font-medium">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10 shadow-2xl shadow-primary/20">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2 text-white">Send a Message</h3>
                <p className="text-white/80">Let's start a conversation</p>
                <div className="w-16 h-0.5 bg-primary mx-auto mt-4"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold mb-3 text-white">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-white/10 border-2 border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 hover:border-primary/50 text-white placeholder-white/70"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold mb-3 text-white">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-white/10 border-2 border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 hover:border-primary/50 text-white placeholder-white/70"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-semibold mb-3 text-white">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-white/10 border-2 border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 hover:border-primary/50 text-white placeholder-white/70"
                      placeholder="Project inquiry"
                    />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold mb-3 text-white">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-5 py-4 bg-white/10 border-2 border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none hover:border-primary/50 text-white placeholder-white/70"
                      placeholder="Tell me about your project and how I can help..."
                    />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-5 rounded-xl font-bold hover:from-primary/90 hover:to-primary/70 transition-all duration-300 flex items-center justify-center space-x-3 neon-glow hover:scale-105 shadow-lg"
                >
                  <Send size={22} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
