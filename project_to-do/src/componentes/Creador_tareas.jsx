import {React,useState} from "react";

function Creador_tareas() {
     
  return (
    <>
      <div className="bg-sky-500 p-4 w-1/4">
        <p className="font-bold mb-3">Formulario de tareas</p>
        <form className="card grid gap-3">
            <input className="w-full" type="text" name="" id="" placeholder="Nombre"/>
            <input className="w-full" type="text" name="" id="" placeholder="Tarea"/>
            <button className="bg-green-600">Guardar</button>
        </form>
      </div>
    </>
  );
}

export default Creador_tareas;
