import React from "react";
import { useState,useContext } from "react";
import {TaskContext} from '../context/taskContext'

function Taskform() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  let {Creartask}= useContext(TaskContext)
 

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
    Creartask(title,description);

    setTitle("")
    setDescription("")
  };

  return (
    <form className="flex flex-col gap-5 justify-center items-center" onSubmit={handleSubmit}>
      <input 
      className=" text-white p-3 rounded-sm "
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <br/><br/>
      <textarea 
      className="p-3 rounded-sm"
        onChange={(e) => setDescription(e.target.value)}
        cols="20"
        rows="4"
        placeholder="escribe la descripción del usuario"
        value={description}
      ></textarea><br/><br/>
      <button className="border rounded-lg p-3 bg-indigo-500 font-bold text-white">Enviar</button>
    </form>
  );
}

export default Taskform;
