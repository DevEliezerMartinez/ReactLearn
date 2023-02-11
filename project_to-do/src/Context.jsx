import { createContext, useState, useEffect } from "react";

export let Contexto = createContext();

export function ContextoProvider(props) {
  const [task, setTask] = useState("");
  useEffect(() => {
    setTask("");
  }, []);

  function mia(x) {
    console.log(x);
    setTask(x);
  }

  let crear=()=>{console.log("crear")}
  let leer=()=>{console.log("leer")}

  let borrar=()=>{console.log("borrar")}

  return (
    <Contexto.Provider value={{ crear,leer,borrar }}>{props.children}</Contexto.Provider>
  );
}
