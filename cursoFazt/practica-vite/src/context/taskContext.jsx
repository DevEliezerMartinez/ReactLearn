import { createContext,useState,useEffect } from "react";
import { tareas as tareasdb } from "../tareas";

export let TaskContext = createContext();

export function TaskContextProvider(props) {
  const [task, setTask] = useState([]);


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



  useEffect(() => {
    setTask(tareasdb);
  }, []);



  return (
    <TaskContext.Provider value={{
      task,
      deleteTask,
      Creartask
    }}>{props.children}</TaskContext.Provider>
  );
}
