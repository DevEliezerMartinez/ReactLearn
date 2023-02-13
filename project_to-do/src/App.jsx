import React from "react";
import Creador_tareas from "./componentes/Creador_tareas";
import { Lista_tareas } from "./componentes/Lista_tareas";
import FormularioTareas from './componentes/FormularioTareas'
import Editor from "./componentes/Editor";

function App() {
  return (
    <div>
      <h1 className="text-center font-extrabold text-4xl">To do list</h1>
      <div className="Componentes flex flex-col items-center gap-4">
        <Creador_tareas />
        <Lista_tareas />
        <Editor/>
        
      </div>
    </div>
  );
}

export default App;
