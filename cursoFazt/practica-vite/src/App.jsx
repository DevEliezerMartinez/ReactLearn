import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { tareas as tareasdb } from "./tareas";
import Tasklist from "./Tasklist";
import Taskform from "./Taskform";

function App() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(tareasdb);
  }, []);


  function Creartask(titleTask) {
    setTask([...task,{
      title:titleTask,
      id: task.length+1,
      description:"algo nuevo"
    }])
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hola mundo</h1>
      <Taskform crearTasko={Creartask}/>
      <Tasklist tasko={task} />
    </div>
  );
}

export default App;
