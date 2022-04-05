import { useState } from "react";
import { Notification } from "./components/notification/Notification";
import { TopMenu } from "./components/top-menu/TopMenu";
import { MainMenu } from "./components/main-menu/MainMenu";
import { HeroSection } from "./components/hero-section/HeroSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-100% font-serif ">
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
    </div>
  );
}

export default App;
