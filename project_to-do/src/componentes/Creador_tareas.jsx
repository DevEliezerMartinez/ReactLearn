
import {React,useState,useContext} from "react";
import { Contexto } from "../Context";

function Creador_tareas() {
  const cont = useContext(Contexto);
  const [titulo, setTitulo] = useState("")
  const [nombre, setNombre] = useState("")
  
  let btnOperaciones=(e)=>{
    e.preventDefault();
    cont.crear(titulo,nombre);
    setNombre("")
    setTitulo("")
  }

  let operacionTitulo=(e)=>{
   setTitulo(e.target.value)
  }

  let operacionNombre=(e)=>{
    setNombre(e.target.value)
   }
  
  return (
    <>
      <div className="bg-sky-500 p-4 w-1/2">
        <p className="font-bold mb-3">Formulario de tareas</p>
        <form className="card grid gap-3 w-1/2 m-auto" onSubmit={btnOperaciones}>
            <input className="w-full" type="text" name="" id="" placeholder="Nombre" onChange={(e)=>operacionTitulo(e)} value={titulo}/>
            <input className="w-full" type="text" name="" id="" placeholder="Tarea"  onChange={(e)=>operacionNombre(e)} value={nombre}/>
            <button className="bg-green-600" >Guardar</button>
        </form>
      </div>
    </>
  );
}

export default Creador_tareas;
