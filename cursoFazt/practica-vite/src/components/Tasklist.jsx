import React from "react";
import Taskcard from './Taskcard'
function Tasklist({tasko,deleteTask}) {
  if (tasko.length == 0) {
    return <p>No hay tareeas aún </p>;
  }
  return (
    <div>
      {tasko.map((tsk) => (
        <Taskcard key={tsk.id} task={tsk} eliminarTarea={deleteTask }/>
      ))}
    </div>
  );
}

export default Tasklist;
