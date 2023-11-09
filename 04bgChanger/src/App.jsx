import { useState } from "react";


function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className=" w-full h-screen duration-500 flex flex-wrap justify-center items-center" style={{ backgroundColor:  color }}>
      <div>
        <h1 className=" font-bold text-lg text-white">Selected Color is {color.toUpperCase()}</h1>
      </div>
      <div className=" fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2">
        <div className=" flex flex-wrap justify-center bg-white text-white rounded-3xl px-3 py-2 gap-3 shadow-lg shadow-zinc-700">
          <button className=" px-4 py-1 rounded-3xl outline-none" style={{backgroundColor: "red"}} onClick={()=> setColor("red")}>Red</button>
          <button className=" px-4 py-1 rounded-3xl outline-none" style={{backgroundColor: "green"}} onClick={()=> setColor("green")}>Green</button>
          <button className=" px-4 py-1 rounded-3xl outline-none" style={{backgroundColor: "yellow"}} onClick={()=> setColor("yellow")}>Yellow</button>
          <button className=" px-4 py-1 rounded-3xl outline-none" style={{backgroundColor: "purple"}} onClick={()=> setColor("purple")}>Purple</button>
          <button className=" px-4 py-1 rounded-3xl outline-none" style={{backgroundColor: "gray"}} onClick={()=> setColor("gray")}>Gray</button>
          <button className=" px-4 py-1 rounded-3xl outline-none" style={{backgroundColor: "blue"}} onClick={()=> setColor("blue")}>Blue</button>
          <button className=" px-4 py-1 rounded-3xl outline-none" style={{backgroundColor: "orange"}} onClick={()=> setColor("orange")}>Orange</button>
        </div>
      </div>
    </div>
  );
}

export default App;
