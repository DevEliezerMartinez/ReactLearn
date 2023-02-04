import React from "react";
function Tasklist({tasko}) {
  if (tasko.length == 0) {
    return <p>No hay tareeas aún </p>;
  }
  return (
    <div>
      {tasko.map((tsk) => (
        <div key={tsk.id}>
          <h3>{tsk.title}</h3>
          <span>{tsk.description}</span>
          
        </div>
      ))}
    </div>
  );
}

export default Tasklist;
