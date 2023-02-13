import { createContext, useState, useEffect } from "react";

export let Contexto = createContext();

export function ContextoProvider(props) {
  let tareaAux = [{ id: 0, title: "tarea1", description: "nombreNuevo" }];

  const [tareasG, setTareasG] = useState(tareaAux);
  const [indiceTarea, setIndiceTarea] = useState();

  useEffect(() => {
    setTareasG(tareaAux);
  }, []);

  let crear = (tituloNuevo, nombreNuevo) => {
    setTareasG([
      ...tareasG,
      {
        id: tareasG.length,
        title: tituloNuevo,
        description: nombreNuevo,
      },
    ]);
  };

  let borrar = (index) => {
    setTareasG(tareasG.filter((ele) => ele.id !== index));
    setIndiceTarea(undefined);
  };

  let editor = (id) => {
    setIndiceTarea(id);
  };

  let modificar = (id, tituloNuevo, descriptionNueva) => {
    const newState = tareasG.map((obj) => {
      if (obj.id == id) {
        tareasG[id].title = tituloNuevo;
        return { ...obj, title: tituloNuevo,description: descriptionNueva };
      }
      return obj;
    });
    setTareasG(newState)
  };

 

  return (
    <Contexto.Provider
      value={{ tareasG, indiceTarea, modificar, editor, crear, borrar }}
    >
      {props.children}
    </Contexto.Provider>
  );
}
