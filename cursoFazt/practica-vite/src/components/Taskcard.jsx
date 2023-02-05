import React from 'react'
import {useContext} from 'react'
import {TaskContext} from '../context/taskContext'
function Taskcard({task,eliminarTarea}) {

const valor = useContext(TaskContext)
   console.log("Turbo: --- Taskcard --- valor", valor);

   
  function Eliminar(){
    alert(task.id)
  }

  return (
    <div key={task.id}>
          <h3>{task.title}</h3>
          <span>{task.description}</span>
          <button onClick={()=>eliminarTarea(task.id)}> Eliminar</button>
          
        </div>
  )
}

export default Taskcard