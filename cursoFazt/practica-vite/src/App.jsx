import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Tasklist from "./components/Tasklist";
import Taskform from "./components/Taskform";

function App() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="border border-spacing-10 border-cyan-400 p-8 rounded-lg container">
        <h1 className="text-3xl m-3 text-white font-bold text-center" >Hola mundo</h1>
        <Taskform />
        <Tasklist />  
      </div>
    </div>
  );
}

/* valores 
<Taskform crearTasko={Creartask}/>
      <Tasklist tasko={task} deleteTask={deleteTask} />
*/
export default App;
