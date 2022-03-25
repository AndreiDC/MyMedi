import { useState } from "react";
import { Notification } from "./components/notification/Notification";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Notification />
    </div>
  );
}

export default App;
