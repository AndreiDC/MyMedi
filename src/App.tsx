import { useState } from "react";
import { Notification } from "./components/notification/Notification";
import { TopMenu } from "./components/top-menu/TopMenu";
import { MainMenu } from "./components/main-menu/MainMenu";
import { HeroSection } from "./components/hero-section/HeroSection";
import { HeroSectionTwo } from "./components/hero-section-two/HeroSectionTwo";
import { BenefitsSection } from "./components/benefits-section/BenefitsSection";
import { VideoSection } from "./components/video-section/VideoSection";
import { Reviews } from "./components/reviews/Reviews";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-100% font-serif ">
      <Notification />
      <div className="hidden md:contents">
        <TopMenu />
      </div>
      <div className=" min-h-screen bg-cover bg-center bg-[url('https://dummyimage.com/1920x886/cccccc/969696.jpg')]">
        <div className="border-b border-white">
          <MainMenu />
        </div>
        <div className="pt-8">
          <HeroSection />
        </div>
      </div>
      <div className=" -mt-10 min-h-screen bg-cover bg-center bg-[url('https://dummyimage.com/1920x700/cccccc/969696.jpg')] mb-12">
        <HeroSectionTwo />
      </div>
      <BenefitsSection />
      <VideoSection />
      <Reviews />
    </div>
  );
}

export default App;
