import { useContext } from "react";
import { Contexto } from "../Context";

export function Lista_tareas() {
  const { tareasG, borrar,editor } = useContext(Contexto);
  let Aux = tareasG;
  /* Aux.map((element) => {
    console.log(element.title, element.description);
  }); */
  /*  tareasG.map(task=>{console.log(task)}) */

  

  if (Aux.length == 0) {
    return (
      <div className="listTareas bg-violet-600 p-4 w-1/2">
        <p className="font-bold mb-3 text-center">No hay tareas</p>
      </div>
    );
  }
  return (
    <div className="listTareas bg-violet-600 p-4 w-1/2">
      <p className="font-bold mb-3">Tareas</p>
      <ul className="flex flex-col items-center gap-2">
        {Aux.map((element) => (
          <li className=" flex w-10/12 justify-between " key={element.id}>
            <span>{element.title}</span> <span>{element.description}</span>
            <div className="flex gap-3">
              <button
                className="bg-yellow-300 p-1 rounded-sm"
                onClick={(e) => {
                  editor(element.id);
                }}
              >
                Edit
              </button>
              <button
                onClick={(e) => {
                  borrar(element.id);
                }}
                className="bg-red-500 p-1 rounded-sm"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
