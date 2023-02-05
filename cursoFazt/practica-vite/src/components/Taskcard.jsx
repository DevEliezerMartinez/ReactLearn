import React from "react";
import { useContext } from "react";
import { TaskContext } from "../context/taskContext";
function Taskcard({ task }) {
  let {deleteTask }=useContext(TaskContext)
 

  function Eliminar() {
    alert(task.id);
  }

  return (
    <div className="tarea p-3 rounded-lg border border-4 border-l-blue-600 bg-green-400 text-center font-serif" key={task.id}>
      <h3 className=" uppercase font-bold text-stone-50">{task.title}</h3>
      <span>{task.description}</span>
      <button onClick={() => deleteTask(task.id)}> Eliminar</button>
    </div>
  );
}

export default Taskcard;
