import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import LogoDesignHero from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LogosGallery from '@/components/LogosGallery';
import SocialMediaHero from '@/components/Social';
import SocialMedia from '@/components/Socialmedia';
import PackHero from '@/components/PackHero';
import Packaging from '@/components/Packaging';
import BillBoardHero from '@/components/BillBoardHero';
import BillBoard from '@/components/BillBoard';
import UIHero from '@/components/UIHero';
import UI from '@/components/UI';
import BrochureHero from '@/components/BrochureHero';
import Brochure from '@/components/Brochure';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <LogoDesignHero />
        <LogosGallery />
        <SocialMediaHero />
        <SocialMedia />
        <PackHero />
        <Packaging />
        <BillBoardHero />
        <BillBoard />
        <UIHero />
        <UI />
        <BrochureHero />
        <Brochure />
         <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
