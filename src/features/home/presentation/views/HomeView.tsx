import { HeroSection } from "../components/HeroSection";
import HowToAdoptSection from "../components/HowToAdoptSection";
import AdoptionsSection from "../components/AdoptionsSection";

const HomeView = () => {
  return (
    <div className="min-h-screen animate-fade-in">
      <HeroSection />
      <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10 text-[#333]">
        Conoce a tu futuro mejor amigo
      </h2>
      <AdoptionsSection />
      <HowToAdoptSection />
    </div>
  );
};

export default HomeView;
