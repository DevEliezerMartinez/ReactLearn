import { useContext,useState } from "react";
import { Contexto } from "../Context";
function Editor() {
  let { tareasG,indiceTarea,modificar } = useContext(Contexto);
  const [titulo, setTitulo] = useState("")
  const [nombre, setNombre] = useState("")
 
 
  const vacia = <p>Nada que mostrar</p>;

  let holderTitulo;
  indiceTarea==undefined?holderTitulo="añada algo":holderTitulo=tareasG[indiceTarea].title

  let holderTarea;
  indiceTarea==undefined?holderTarea="añada algo":holderTarea=tareasG[indiceTarea].description


  let manejadorEvento=(e)=>{
    e.preventDefault();
    
    modificar(indiceTarea,titulo,nombre)
    setNombre("")
    setTitulo("")


  }
  function tt(){}
  let contenido = (
    
    <form className="flex gap-4 justify-center m-auto" onSubmit={(e)=>manejadorEvento(e)}>
      <input type="text" name="" id="" defaultValue="" placeholder={holderTitulo} onChange={(e)=>setTitulo(e.target.value) } required />
      <input type="text" name="" id="" defaultValue="" placeholder={holderTarea} onChange={(e)=>setNombre(e.target.value) }required/>
      <button className="border p-2 bg-sky-400 rounded-sm" >Actualizar</button>
    </form>
  );

  return (
    <div className="Editr bg-emerald-500 p-4 w-1/2 text-center">
      <p className="font-bold mb-3">Editor</p>
      <div className="flex gap-4 justify-center m-auto">
        { indiceTarea == undefined? vacia: contenido}
      </div>

    </div>
  );
}

export default Editor;
