import "./styles/index.scss";
import Header from "./Components/header";
import { useState } from "react";
import AllTasks from "./Components/alltasks.jsx";

function App() {

  // Light Mode
  const [isOn, setIson] = useState(false);
  const toggle = () => {
    setIson(!isOn);
  };

  return (
    <div
      className={`App flex flex-col align-middle items-center h-lvh ${
        isOn ? "light" : ""
      }`}
    >
      <div className="container flex flex-col gap-6 justify-center items-center align-center sm:w-[500px] my-24 p-4">
        <Header theme={toggle} light={isOn} />

        <div className="tasks w-full">
          <AllTasks />
        </div>
      </div>
    </div>
  );
}

export default App;


//   Drag and drop to reorder list
