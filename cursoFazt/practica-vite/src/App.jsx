import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { tareas as tareasdb } from "./tareas";
import Tasklist from "./components/Tasklist";
import Taskform from "./components/Taskform";

function App() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(tareasdb);
  }, []);


  function Creartask(titleTask,descriptionTask) {
    setTask([...task,{
      title:titleTask,
      id: task.length,
      description:descriptionTask
    }])
  }

  function deleteTask(taskId){
    console.log(task)
    console.log(taskId)

    setTask(task.filter(ele=> ele.id!== taskId))
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
      <Tasklist tasko={task} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
