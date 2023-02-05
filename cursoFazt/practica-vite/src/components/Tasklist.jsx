import React from "react";
import {useContext } from "react";
import {TaskContext} from '../context/taskContext'

import Taskcard from './Taskcard'

function Tasklist() {
  const {task} = useContext(TaskContext);
  console.log("value");
 

  if (task.length == 0) {
    return <p>No hay tareeas aún </p>;
  }
  return (
    <div className="flex flex-col gap-5 mt-3">
      {task.map((tsk) => (
        <Taskcard key={tsk.id} task={tsk} />
      ))}
    </div>
  );
}

export default Tasklist;
