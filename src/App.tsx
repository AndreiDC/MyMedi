import { useState } from "react";
import { Notification } from "./components/notification/Notification";
import { TopMenu } from "./components/top-menu/TopMenu";
import { MainMenu } from "./components/main-menu/MainMenu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto ">
      <Notification />
      <div className="hidden md:contents">
        <TopMenu />
      </div>

      <div className="bg-[url('https://dummyimage.com/1920x886/cccccc/969696.jpg')]">
        <MainMenu />
      </div>
    </div>
  );
}

export default App;
