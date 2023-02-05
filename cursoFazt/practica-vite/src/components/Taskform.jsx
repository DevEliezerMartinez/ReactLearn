import React from "react";
import { useState } from "react";
import {TaskContext} from '../context/taskContext'

function Taskform({ crearTasko }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title,description);
    /* const t={
         title,
         id: 4,
         description: "algo nuevo"
    }
    console.log(t)
    crearTasko(t) */
    crearTasko(title,description);

    setTitle("")
    setDescription("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <br/><br/>
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        cols="20"
        rows="4"
        placeholder="escribe la descripción del usuario"
        value={description}
      ></textarea><br/><br/>
      <button>Enviar</button>
    </form>
  );
}

export default Taskform;
