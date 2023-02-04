import React from "react";
import { useState } from "react";


function Taskform({crearTasko}) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title)
    /* const t={
         title,
         id: 4,
         description: "algo nuevo"
    }
    console.log(t)
    crearTasko(t) */
    crearTasko(title)
    
  };



  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Enviar</button>
    </form>
  );
}

export default Taskform;
